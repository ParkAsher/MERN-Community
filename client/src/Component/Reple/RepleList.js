import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { RepleListDiv } from '../../Style/RepleCss';

import RepleContent from './RepleContent';

function RepleList(props) {

    const [repleList, setRepleList] = useState([]);

    useEffect(() => {

        let body = {
            postId: props.postId,
        }

        axios.post("/api/reple/getReple", body).then((res) => {

            if (res.data.success) {
                setRepleList([...res.data.repleList])
            }

        })

    }, [])



    return (
        <RepleListDiv>
            {repleList.map((reple, idx) => {
                return (
                    <RepleContent reple={reple} idx={idx}></RepleContent>
                );
            })}
        </RepleListDiv >
    )
}

export default RepleList