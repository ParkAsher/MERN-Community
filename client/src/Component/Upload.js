import React, { useState } from 'react'

function Upload() {

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
            <input type="text" value={Content} onChange={(event) => { setContent(event.currentTarget.value) }}></input>
            <button onClick={() => { onSubmit() }} style={{ marginTop: "1rem" }}>제출</button>
        </div>
    )
}

export default Upload