import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Spinner } from 'react-bootstrap';

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

    }, [])

    useEffect(() => {
        console.log(PostInfo)
    }, [PostInfo])


    return (
        <div>
            {
                Flag ? <div>{PostInfo.title} {PostInfo.content}</div>
                    : <Spinner animation='border' role="status"><span className="visually-hidden">Loading..</span></Spinner>

            }
        </div>
    )
}

export default Detail