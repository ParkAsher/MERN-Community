import React, { useState, useEffect } from 'react'
import axios from 'axios';
import List from './Post/List';

import { DropdownButton, Dropdown } from 'react-bootstrap';

function MainPage() {

    const [PostList, setPostList] = useState([]);

    const [Sort, setSort] = useState("최신순");

    const [SearchTerm, setSearchTerm] = useState("");

    const getPostList = () => {

        let body = {
            sort: Sort,
            searchTerm: SearchTerm,
        };

        axios.post("/api/post/list", body).then((res) => {

            if (res.data.success) {
                setPostList([...res.data.postList])
            }

        }).catch((err) => {

            console.log(err);
        })

    }

    useEffect(() => {

        getPostList();

    }, [Sort]);


    const SearchHandler = () => {
        getPostList();
    }

    return (
        <div>
            <DropdownButton variant='outline-secondary' title={Sort}>
                <Dropdown.Item onClick={() => setSort("최신순")} >최신순</Dropdown.Item>
                <Dropdown.Item onClick={() => setSort("인기순")} >인기순</Dropdown.Item>
            </DropdownButton>
            <input type="text" value={SearchTerm} onChange={(e) => setSearchTerm(e.currentTarget.value)} onKeyDown={(e) => { if (e.key === "Enter") SearchHandler(); }}></input>
            <List PostList={PostList}></List>
        </div>
    )
}

export default MainPage