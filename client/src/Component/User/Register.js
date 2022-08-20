import React, { useState } from 'react'
import LoginDiv from '../../Style/UserCss'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

/*
    firebase
*/
import firebase from '../../firebase';

function Register() {

    let navigate = useNavigate();

    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Pw, setPW] = useState("");
    const [PwConfirm, setPwConfirm] = useState("");

    const [Flag, setFlag] = useState(false);


    const Registerfunc = async (e) => {

        setFlag(true);

        e.preventDefault();

        if (!(Name && Email && Pw && PwConfirm)) {
            return alert("모든 값을 채워주세요!")
        }

        if (Pw != PwConfirm) {
            return alert("비밀번호와 비밀번호 확인 값은 같아야 합니다.")
        }

        let createUser = await firebase.auth().createUserWithEmailAndPassword(Email, Pw);

        await createUser.user.updateProfile({
            displayName: Name,
        })

        console.log(createUser.user);

        let body = {

            email: createUser.user.multiFactor.user.email,
            displayName: createUser.user.multiFactor.user.displayName,
            uid: createUser.user.multiFactor.user.uid,

        }

        axios.post("/api/user/register", body).then((res) => {

            setFlag(false);

            if (res.data.success) {
                // 회원가입 성공
                navigate("/login");

            } else {

                return alert("회원가입이 실패하였습니다.");
            }

        })
    }

    return (
        <LoginDiv>
            <form>
                <label htmlFor='name'>이름</label>
                <input type="name" value={Name} onChange={(e) => { setName(e.currentTarget.value) }} ></input>
                <label htmlFor='email'>이메일</label>
                <input type="email" value={Email} onChange={(e) => { setEmail(e.currentTarget.value) }}></input>
                <label htmlFor='password'>비밀번호</label>
                <input type="password" value={Pw} minLength={8} onChange={(e) => { setPW(e.currentTarget.value) }}></input>
                <label htmlFor='password'>비밀번호 확인</label>
                <input type="password" value={PwConfirm} minLength={8} onChange={(e) => { setPwConfirm(e.currentTarget.value) }}></input>
                <button disabled={Flag} onClick={(e) => Registerfunc(e)}>회원가입</button>
            </form>
        </LoginDiv>
    )
}

export default Register