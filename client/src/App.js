import React, { Fragment } from 'react';
/*
    react-router-dom
*/
import { Routes, Route } from "react-router-dom"

/*
    Components
*/
import Heading from './Component/Heading';
import List from './Component/Post/List';
import Upload from './Component/Post/Upload';
import Detail from './Component/Post/Detail';
import Edit from './Component/Post/Edit';

import Login from './Component/User/Login';
import Register from './Component/User/Register';

function App() {

    /*
        1. 가정문 : if-else, switch  => 삼항연산자 ? :
        2. 반복문 : for              => map
    */

    /*    
        let flag = true;

        let Arr = [1, 2, 3]
    */

    /*
        const [ContentList, setContentList] = useState([]);
    */

    return (
        /*
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1>hello, react!</h1>
            {
                flag ? "참입니다." : "거짓입니다."
            }
            {
                // key로 idx를 주는것이 원칙
                Arr.map((element, idx) => {
                    return <p>{element}</p>
                })
            }
            <Test></Test>
        </div>
        */
        <Fragment>
            <Heading></Heading>
            <Routes>
                <Route path="/" element={<List />} />
                <Route path="/upload" element={<Upload />} />
                <Route path="/post/:postNum" element={<Detail />} />
                <Route path="/edit/:postNum" element={<Edit />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Fragment>

    );
}

export default App;
