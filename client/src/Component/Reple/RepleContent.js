import React, { useState, useEffect, useRef } from 'react'
import { RepleContentDiv, RepleUploadDiv } from '../../Style/RepleCss';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Avatar from 'react-avatar';

function RepleContent(props) {

    const [ModalFlag, setModalFlag] = useState(false);

    const ref = useRef();

    useOnclickOutside(ref, () => setModalFlag(false));

    const user = useSelector((state) => state.user);

    const [EditFlag, setEditFlag] = useState(false);
    const [Reple, setReple] = useState(props.reple.reple);

    const SubmitHandler = (e) => {

        e.preventDefault();

        let body = {
            uid: user.uid,
            reple: Reple,
            postId: props.reple.postId,
            repleId: props.reple._id,
        }

        axios.post("/api/reple/edit", body).then((res) => {

            if (res.data.success) {
                console.log(props.reple.author.photoURL);
                alert("댓글 수정이 성공하였습니다.");

            } else {
                alert("댓글 수정이 실패하였습니다.");
            }
            return window.location.reload();
        })

    };

    const DeleteHandler = (e) => {
        e.preventDefault();

        if (window.confirm("정말로 삭제하시겠습니까?")) {

            let body = {
                repleId: props.reple._id,
                postId: props.reple.postId,
            }

            axios.post("/api/reple/delete", body).then((res) => {

                if (res.data.success) {
                    alert("댓글이 삭제되었습니다.");
                    window.location.reload();
                }

            }).catch((err) => {
                alert("댓글 삭제에 실패하였습니다.");
            });

        }

    }


    return (
        <div>
            <RepleContentDiv>
                <div className='author'>
                    <div style={{ display: "flex", marginLeft: "10px" }}>
                        <div style={{ height: "40px", display: "table" }}>
                            <Avatar size='20' round={true} src={props.reple.author.photoURL} style={{ paddingTop: "3px", verticalAlign: "middle" }}></Avatar>
                        </div>
                        <div style={{ height: "40px", display: "table", marginLeft: "5px" }}>
                            <p style={{ display: "table-cell", height: "40px", verticalAlign: "middle" }}> {props.reple.author.displayName}</p>
                        </div>
                    </div>
                    {
                        props.reple.author.uid === user.uid && (

                            <div className='modalControl'>
                                <span onClick={() => setModalFlag(true)}>···</span>
                                {ModalFlag && (
                                    <div className='modalDiv' ref={ref}>
                                        <p onClick={() => { setEditFlag(true); setModalFlag(false); }}>수정</p>
                                        <p className='delete' onClick={(e) => DeleteHandler(e)}>삭제</p>
                                    </div>
                                )}
                            </div>

                        )
                    }
                </div>
                {
                    EditFlag ? (
                        <RepleUploadDiv>
                            <form>
                                <input type='text' value={Reple} onChange={(e) => { setReple(e.currentTarget.value) }}></input>
                                <button onClick={(e) => { SubmitHandler(e) }}>등록</button>

                            </form>
                            <div className='cancel'>
                                <button onClick={(e) => { e.preventDefault(); setEditFlag(false); }}>취소</button>
                            </div>
                        </RepleUploadDiv>
                    ) : (
                        <p>{props.reple.reple}</p>
                    )
                }
            </RepleContentDiv >
        </div >
    )
}

function useOnclickOutside(ref, handler) {

    useEffect(() => {

        const listener = (e) => {

            if (!ref.current || ref.current.contains(e.target)) {
                return;
            }
            handler(e);
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
        };

    }, [ref, handler]);
}

export default RepleContent