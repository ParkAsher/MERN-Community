import React, { useState, useEffect } from 'react'
import { UploadButtonDiv, UploadDiv, UploadForm, } from '../Style/UploadCss.js';

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
        <UploadDiv>
            <UploadForm>
                <label htmlFor='title'>제목</label>
                <input id='title' type="text" value={Content} onChange={(event) => { setContent(event.currentTarget.value) }}></input>
                <label htmlFor='content'>내용</label>
                <textarea></textarea>
                <UploadButtonDiv>
                    <button onClick={() => { onSubmit() }}>제출</button>
                </UploadButtonDiv>
            </UploadForm>
        </UploadDiv>
    )
}

export default Upload