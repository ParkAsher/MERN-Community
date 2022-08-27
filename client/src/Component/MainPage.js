import React, { useState, useEffect } from 'react'
import axios from 'axios';
import List from './Post/List';

import { DropdownButton, Dropdown } from 'react-bootstrap';

function MainPage() {

    const [PostList, setPostList] = useState([]);

    const [Sort, setSort] = useState("최신순");

    const [SearchTerm, setSearchTerm] = useState("");

    const [Skip, setSkip] = useState(0);

    const [LoadMore, setLoadMore] = useState(true);

    const getPostLoadMore = () => {

        let body = {
            sort: Sort,
            searchTerm: SearchTerm,
            skip: Skip,
        };

        axios.post("/api/post/list", body).then((res) => {

            if (res.data.success) {
                setPostList([...PostList, ...res.data.postList]);

                // 0 idx ~ 4 idx : 5skip
                // 5 idx ~ 9 idx
                setSkip(Skip + res.data.postList.length);

                if (res.data.postList.length < 5) {

                    setLoadMore(false);
                }
            }

        }).catch((err) => {

            console.log(err);
        })

    }

    const getPostList = () => {

        setSkip(0);

        let body = {
            sort: Sort,
            searchTerm: SearchTerm,
            skip: 0,
        };

        axios.post("/api/post/list", body).then((res) => {

            if (res.data.success) {
                setPostList([...res.data.postList]);

                // 0 idx ~ 4 idx : 5skip
                // 5 idx ~ 9 idx
                setSkip(res.data.postList.length);

                if (res.data.postList.length < 5) {

                    setLoadMore(false);
                }
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
            {LoadMore && (
                <button style={{ marginBottom: "10vh" }} onClick={() => getPostLoadMore()}>더 보기</button>
            )}
        </div>
    )
}

export default MainPage