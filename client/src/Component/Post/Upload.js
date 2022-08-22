import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UploadButtonDiv, UploadDiv, UploadForm, } from '../../Style/UploadCss.js';
import ImageUpload from './ImageUpload.js';
import axios from 'axios';
import { useSelector } from 'react-redux';

function Upload(props) {

    const [Title, setTitle] = useState("");
    const [Content, setContent] = useState("");
    /*
        image
    */
    const [Image, setImage] = useState("");

    let navigate = useNavigate();

    const user = useSelector((state) => state.user);

    useEffect(() => {

        if (!user.accessToken) {
            alert("로그인 한 회원만 글을 작성할 수 있습니다.");
            navigate("/login")
        }

    }, [])


    const onSubmit = (e) => {

        e.preventDefault();


        if (Title === "" || Content === "") {
            return alert("모든 항목을 채워주세요!")
        }

        let body = {

            title: Title,
            content: Content,
            image: Image,
            uid: user.uid,
        }

        axios.post("/api/post/submit", body).then((res) => {

            if (res.data.success) {
                alert("글 작성이 완료되었습니다.")
                navigate("/");
            } else {
                alert("글 작성이 실패하였습니다.")
            }
        }).catch((err) => {
            console.log(err);
        })

    }

    return (
        <UploadDiv>
            <UploadForm>
                <label htmlFor='title'>제목</label>
                <input id='title' type="text" value={Title} onChange={(event) => { setTitle(event.currentTarget.value) }}></input>
                <ImageUpload setImage={setImage}></ImageUpload>
                <label htmlFor='content'>내용</label>
                <textarea id="content" value={Content} onChange={(event) => { setContent(event.currentTarget.value) }}></textarea>
                <UploadButtonDiv>
                    <button onClick={(e) => { onSubmit(e) }}>제출</button>
                </UploadButtonDiv>
            </UploadForm>
        </UploadDiv>
    )
}

export default Upload