import React, { useState, useEffect } from 'react'

function Upload(props) {

    const [Content, setContent] = useState("");

    const onSubmit = () => {
        let tempArr = [...props.ContentList]
        tempArr.push(Content);
        props.setContentList([...tempArr]);
        setContent("");
    }

    /*
        useEffect

        [] : useEffect가 실행될 조건 (빈 배열일때는 실행되거나 죽을때 딱 한번만 실행)
    */

    useEffect(() => {
        console.log("Content가 바뀌었습니다.");
    }, [Content]);


    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1>Upload component!</h1>
            <input type="text" value={Content} onChange={(event) => { setContent(event.currentTarget.value) }}></input>
            <button onClick={() => { onSubmit() }} >제출</button>
        </div>
    )
}

export default Upload