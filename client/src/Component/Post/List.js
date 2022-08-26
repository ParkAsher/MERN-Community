import React from 'react'
import { ListDiv, ListItem } from '../../Style/ListCss';
import { Link } from 'react-router-dom'
import Avatar from 'react-avatar';

import moment from 'moment';
import "moment/locale/ko";

function List(props) {

    const setTime = (a, b) => {

        if (a !== b) {
            return moment(b).format("YYYY년 MMMM Do, hh:mm") + " (수정됨)";
        } else {
            return moment(a).format("YYYY년 MMMM Do, hh:mm");
        }
    }

    return (
        <ListDiv>
            {props.PostList.map((post, idx) => {
                return (
                    <ListItem key={idx}>
                        <Link to={`/post/${post.postNum}`}>
                            <p className='title'>{post.title}</p>
                            <p className='author'>
                                {post.author.displayName}
                            </p>
                            <p>{post.content}</p>
                            <p>{setTime(post.createdAt, post.updatedAt)}</p>
                        </Link>
                    </ListItem>
                );
            })}
        </ListDiv>
    )
}

export default List