import './App.css';
import Test from './Test';

function App() {

    /*
        1. 가정문 : if-else, switch  => 삼항연산자 ? :
        2. 반복문 : for              => map
    */

    let flag = true;

    let Arr = [1, 2, 3]

    return (
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
    );
}

export default App;
