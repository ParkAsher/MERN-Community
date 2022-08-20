import React, { useState } from 'react'
import LoginDiv from '../../Style/UserCss'

function Register() {

    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Pw, setPW] = useState("");
    const [PwConfirm, setPwConfirm] = useState("");


    return (
        <LoginDiv>
            <form>
                <label htmlFor='name'>이름</label>
                <input type="name" value={Name} onChange={(e) => { setName(e.currentTarget.value) }} ></input>
                <label htmlFor='email'>이메일</label>
                <input type="email" value={Email} onChange={(e) => { setEmail(e.currentTarget.value) }}></input>
                <label htmlFor='password'>비밀번호</label>
                <input type="password" value={Pw} onChange={(e) => { setPW(e.currentTarget.value) }}></input>
                <label htmlFor='password'>비밀번호 확인</label>
                <input type="password" value={PwConfirm} onChange={(e) => { setPwConfirm(e.currentTarget.value) }}></input>
                <button>회원가입</button>
            </form>
        </LoginDiv>
    )
}

export default Register