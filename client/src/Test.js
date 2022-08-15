import React, { Fragment } from 'react'


/*
    1. 컴포넌트의 이름은 반드시 영어 대문자로 시작하여야 합니다.
    2. 컴포넌트는 다른 컴포넌트가 사용할 수 있도록 export 해주어야 합니다.
    3. 컴포넌트가 다른 컴포넌트를 사용하려면 import 하여야 합니다.
*/

function Test() {
  return (
    <Fragment>
        <h1>Test 컴포넌트입니다.</h1>    
    </Fragment>
  )
}

export default Test