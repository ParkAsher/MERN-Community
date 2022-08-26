import React from 'react'
import { useSelector } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { BtnDiv, Post, PostDiv } from '../../Style/PostDetailCss';
import Avatar from 'react-avatar';

function Detail(props) {

    let params = useParams();
    let navigate = useNavigate();

    const user = useSelector((state) => state.user) // 어떤 사용자가 접속해있는지

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
            <Post>
                <h1>{props.PostInfo.title}</h1>
                <div style={{ display: "flex" }}>
                    <div style={{ height: "40px", display: "table" }}>
                        <Avatar size='20' round={true} src={props.PostInfo.author.photoURL} style={{ paddingTop: "3px", verticalAlign: "middle" }}></Avatar>
                    </div>
                    <div style={{ height: "40px", display: "table", marginLeft: "5px" }}>
                        <p className='author' style={{ display: "table-cell", height: "40px", verticalAlign: "middle" }}> {props.PostInfo.author.displayName}</p>
                    </div>
                </div>
                {
                    props.PostInfo.image ?
                        <img src={props.PostInfo.image} alt="" style={{ width: "100%", height: "auto" }} />
                        : null
                }
                <p>{props.PostInfo.content}</p>
            </Post>
            {
                user.uid === props.PostInfo.author.uid &&
                <BtnDiv>
                    <Link to={`/edit/${props.PostInfo.postNum}`}>
                        <button className='edit'>수정</button>
                    </Link>

                    <button className='delete' onClick={() => DeleteHandler()}>삭제</button>
                </BtnDiv>
            }

        </PostDiv >
    )
}

export default Detail