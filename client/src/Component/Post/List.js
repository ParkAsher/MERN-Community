import React, { useState, useEffect } from 'react'
import axios from 'axios'

function List(props) {

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

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1>List component!</h1>
            <h1>{Text}</h1>
            {props.ContentList.map((content, idx) => {
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