import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginDiv from '../../Style/UserCss'

import firebase from '../../firebase.js';

function Login() {

    let navigate = useNavigate();

    const [Email, setEmail] = useState("");
    const [Pw, setPw] = useState("");

    const [ErrorMsg, setErrorMsg] = useState("");

    /*
        Login
    */
    const SignInFunc = async (e) => {

        e.preventDefault();

        if (!(Email && Pw)) {
            return alert("모든 값을 채워주세요.");
        }

        try {

            await firebase.auth().signInWithEmailAndPassword(Email, Pw);
            navigate("/");

        } catch (err) {

            if (err.code === "auth/user-not-found") {
                setErrorMsg("존재하지 않는 이메일 입니다.");
            } else if (err.code === "auth/wrong-password") {
                setErrorMsg("비밀번호가 일치하지 않습니다.");
            } else {
                setErrorMsg("로그인이 실패하였습니다.")
            }

        }
    }

    useEffect(() => {

        // 5초뒤 에러메세지 초기화
        setTimeout(() => {
            setErrorMsg("");
        }, 5000);

    }, [ErrorMsg])

    return (
        <LoginDiv>
            <form>
                <label htmlFor='email'>이메일</label>
                <input type='email' value={Email} onChange={(e) => { setEmail(e.currentTarget.value) }} required></input>
                <label htmlFor='password'>비밀번호</label>
                <input type='password' value={Pw} onChange={(e) => { setPw(e.currentTarget.value) }} required></input>
                {ErrorMsg !== "" && <p style={{ color: "red" }}>{ErrorMsg}</p>}
                <button onClick={(e) => SignInFunc(e)}>로그인</button>
                <button onClick={(e) => { e.preventDefault(); navigate("/register") }}>회원가입</button>
            </form>
        </LoginDiv>
    )
}

export default Login