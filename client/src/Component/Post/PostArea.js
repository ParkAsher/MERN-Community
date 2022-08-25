import React, { useState, useEffect } from 'react'
import Detail from './Detail';
import { Spinner } from 'react-bootstrap';
import { SpinnerDiv } from '../../Style/PostDetailCss';
import { useParams } from 'react-router-dom'
import axios from 'axios';

import RepleArea from '../Reple/RepleArea';

function PostArea() {

    let params = useParams();

    const [PostInfo, setPostInfo] = useState({});
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


    return (
        <div>
            {Flag ? (
                <>
                    <Detail PostInfo={PostInfo} />
                    <RepleArea postId={PostInfo._id}></RepleArea>
                </>
            ) : (

                <SpinnerDiv>
                    <Spinner animation='border' role="status">
                        <span className="visually-hidden">Loading..</span>
                    </Spinner>
                </SpinnerDiv>

            )}

        </div>
    )
}

export default PostArea