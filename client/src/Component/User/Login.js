import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginDiv from '../../Style/UserCss'

function Login() {

    let navigate = useNavigate();

    const [Email, setEmail] = useState("");
    const [Pw, setPw] = useState("");


    return (
        <LoginDiv>
            <form>
                <label htmlFor='email'>이메일</label>
                <input type='email' value={Email} onChange={(e) => { setEmail(e.currentTarget.value) }}></input>
                <label htmlFor='password'>비밀번호</label>
                <input type='password' value={Pw} onChange={(e) => { setPw(e.currentTarget.value) }}></input>
                <button>로그인</button>
                <button onClick={(e) => { e.preventDefault(); navigate("/register") }}>회원가입</button>
            </form>
        </LoginDiv>
    )
}

export default Login