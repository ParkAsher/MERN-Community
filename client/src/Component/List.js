import React, { useState } from 'react'

function List() {

    const [Content, setContent] = useState("");

    const [ContentList, setContentList] = useState([]);

    const onSubmit = () => {
        let tempArr = [...ContentList]
        tempArr.push(Content);
        setContentList([...tempArr]);
        setContent("");
    }

    return (
        <div>
            {ContentList.map((content, idx) => {
                return (
                    <div key={idx} style={{ width: "100%", marginLeft: "1rem", }}>
                        내용 : {content}
                    </div>
                );
            })}
        </div>
    )
}

export default List