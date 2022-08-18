import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import { BtnDiv, Post, PostDiv, SpinnerDiv } from '../../Style/PostDetailCss';

function Detail() {

    let params = useParams();

    const [PostInfo, setPostInfo] = useState({}) // object type

    const [Flag, setFlag] = useState(false);


    useEffect(() => {

        let body = {
            postNum: params.postNum
        }

        axios.post("/api/post/detail", body).then((res) => {

            if (res.data.success) {

                setPostInfo(res.data.post)
                setFlag(true)

            }

        }).catch((err) => {

            console.log(err)

        })

    }, [params.postNum])

    useEffect(() => {
        console.log(PostInfo)
    }, [PostInfo])


    return (
        <PostDiv>
            {Flag ? (
                <>
                    <Post>
                        <h1>{PostInfo.title}</h1>
                        <p>{PostInfo.content}</p>
                    </Post>
                    <BtnDiv>
                        <Link to={`/edit/${PostInfo.postNum}`}>
                            <button className='edit'>수정</button>
                        </Link>

                        <button className='delete'>삭제</button>
                    </BtnDiv>
                </>
            ) : (
                <SpinnerDiv>
                    <Spinner animation='border' role="status">
                        <span className="visually-hidden">Loading..</span>
                    </Spinner>
                </SpinnerDiv>
            )}
        </PostDiv>
    )
}

export default Detail