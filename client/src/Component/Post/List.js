import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ListDiv, ListItem } from '../../Style/ListCss';

function List(props) {

    /*
        const [Text, setText] = useState("")
    

        useEffect(() => {

            let body = {
                text: "hello",
            }

            axios.post("/api/test", body).then((response) => {


                console.log(response);
                setText(response.data.text);

            }).catch((error) => {


                console.log(error)

            })


        }, [])
    */

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
        <ListDiv>
            {PostList.map((post, idx) => {
                return (
                    <ListItem>
                        <p className='title'>{post.title}</p>
                        <p>{post.content}</p>
                    </ListItem>
                );
            })}
        </ListDiv>
    )
}

export default List