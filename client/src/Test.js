import React, { Fragment, useState } from 'react'


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

    const [Temp, setTemp] = useState(0);
    /*
        1. 첫번째 인자 : 변수의 이름
        2. 두번째 인자 : State를 바꿔주는 함수
        3. useState 함수 인자 : State의 초기 Type, 값

        state의 값이 바뀌어도 화면을 재 랜더링(새로고침) 시킬 필요가 없다.

        1. state의 값을 바꿀때는 항상 setState 사용!
        2. setstate를 html 태그의 on 속성 호출 : function(){}
    */

    const [Temp2, setTemp2] = useState([1, 2, 3]);
    /*
        배열에 값을 추가할떄는 새로운 배열을 생성하는 방식으로.
    */
    const [Temp3, setTemp3] = useState([]);
    const [Number, setNumber] = useState(0);

    const [Temp4, setTemp4] = useState(false);

    /*
        state를 사용하여 input 태그 관리.
    */
    const [Content, setContent] = useState("");
    /*
        간략한 커뮤니티 기능
    */
    const [ContentList, setContentList] = useState([]);

    const onSubmit = () => {
        let tempArr = [...ContentList]
        tempArr.push(Content);
        setContentList([...tempArr]);
        setContent("");
    }


    return (
        <Fragment>
            <h1 className='test' style={{ fontSize: "3rem" }}>Test 컴포넌트입니다.</h1>
            <h1>{Temp}</h1>
            <button onClick={() => setTemp(Temp + 1)}>증가</button>
            <h1>{Temp2}</h1>
            <button onClick={() => { let arr = []; arr = [...Temp2]; arr.push(4); setTemp2([...arr]); }}>추가</button>

            {
                Temp3.map((element, idx) => {
                    return <p key={idx}>{element}</p>
                })
            }
            <button onClick={() => { let arr = []; arr = [...Temp3]; arr.push(Number); setNumber(Number + 1); setTemp3([...arr]); }}>추가</button>

            {
                /*
                    Temp4의 값이 참이면 <h1> 태그를 보여주고,
                    Temp4의 값이 거짓이면, <h1> 태그를 숨겨주는 역할
                    btn 클릭할때마다 Temp4의 값이 !
                */
                Temp4 ? <h1 className='test'>Test 컴포넌트 입니다.</h1> : null
            }
            <button onClick={() => { setTemp4(!Temp4) }}>{Temp4 ? "숨기기" : "보기"}</button>

            <div style={{ display: "flex", flexDirection: "column", allignItems: "center", marginTop: "3rem", }}>

                {ContentList.map((content, idx) => {
                    return (
                        <div key={idx} style={{ width: "100%", marginLeft: "1rem", }}>
                            내용 : {content}
                        </div>
                    );
                })}
                <input type="text" value={Content} onChange={(event) => { setContent(event.currentTarget.value) }}></input>
                <button onClick={() => { onSubmit() }} style={{ marginTop: "1rem" }}>제출</button>
            </div>

        </Fragment>
    )
}

export default Test