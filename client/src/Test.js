import React, { Fragment } from 'react'


/*
    1. 컴포넌트의 이름은 반드시 영어 대문자로 시작하여야 합니다.
    2. 컴포넌트는 다른 컴포넌트가 사용할 수 있도록 export 해주어야 합니다.
    3. 컴포넌트가 다른 컴포넌트를 사용하려면 import 하여야 합니다.
*/

function Test() {

    /*
        JSX
        1. CamelCase 원칙 : className 
        2. js : {}
        3. css, style : {{}} + object / js에서 ; 은 종결자를 의미하므로 사용하지 않는다
    */

    const Temp = 7;


    return (
        <Fragment>
            <h1 className='test' style={{ fontSize: "3rem" }}>Test 컴포넌트입니다.</h1>
            <h1>{Temp}</h1>
        </Fragment>
    )
}

export default Test