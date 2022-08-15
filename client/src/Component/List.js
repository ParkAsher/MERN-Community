import React from 'react'

function List(props) {

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1>List component!</h1>
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