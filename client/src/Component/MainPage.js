import React, { useState, useEffect } from 'react'
import axios from 'axios';
import List from './Post/List';

function MainPage() {

    const [PostList, setPostList] = useState([]);

    useEffect(() => {

        axios.post("/api/post/list").then((res) => {

            if (res.data.success) {
                setPostList([...res.data.postList])
            }

        }).catch((err) => {

            console.log(err);
        })

    }, []);



    return (
        <div>
            <List PostList={PostList}></List>
        </div>
    )
}

export default MainPage