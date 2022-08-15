import React from 'react'

/*
    react-router-dom [Link]
    a 태그처럼 사용 됨
*/
import { Link } from 'react-router-dom'

function Heading() {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
            <h1>Hello, React!</h1>
            <Link to="/">Home</Link>
            <Link to="/Upload">Upload</Link>
            <Link to="/List">List</Link>
        </div>
    )
}

export default Heading