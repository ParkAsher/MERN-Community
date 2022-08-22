import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import { BtnDiv, Post, PostDiv, SpinnerDiv } from '../../Style/PostDetailCss';

function Detail() {

    let params = useParams();
    let navigate = useNavigate();

    const user = useSelector((state) => state.user) // 어떤 사용자가 접속해있는지

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

    // 삭제
    const DeleteHandler = () => {

        if (window.confirm("정말로 삭제 하시겠습니까?")) {

            let body = {
                postNum: params.postNum,
            }

            axios.post("/api/post/delete", body).then((res) => {

                if (res.data.success) {
                    alert("글이 삭제되었습니다.")
                    navigate("/");
                }

            }).catch((err) => {
                console.log(err);
            })

        }

    }

    return (
        <PostDiv>
            {Flag ? (
                <>
                    <Post>
                        <h1>{PostInfo.title}</h1>
                        <h3>{PostInfo.author.displayName}</h3>
                        {
                            PostInfo.image ?
                                <img src={PostInfo.image} alt="" style={{ width: "100%", height: "auto" }} />
                                : null
                        }
                        <p>{PostInfo.content}</p>
                    </Post>
                    {user.uid === PostInfo.author.uid &&
                        <BtnDiv>
                            <Link to={`/edit/${PostInfo.postNum}`}>
                                <button className='edit'>수정</button>
                            </Link>

                            <button className='delete' onClick={() => DeleteHandler()}>삭제</button>
                        </BtnDiv>
                    }
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