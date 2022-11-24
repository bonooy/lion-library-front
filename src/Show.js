import './css/Master.css';
import LibMainPage from "./pages/LibMainPage";
import {useNavigate} from "react-router-dom";

export default function Show(props) {

    let navigate = useNavigate();

    const redirectToBack = () => {
        navigate("/all")
    }

    const Header = (
        <>
            <h1 className="titleText more"> 도서 제목 </h1>
            <h2 className="yearText more">yyyy.mm.dd ~ yyyy.mm.dd</h2>
        </>
    );

    const Body = (
        <>
            <div className="contentBoxBody">
                <div className="writingBox">
                    <div className="book" style={{"backgroundImage": "./assets/images/sample_book.png"}}></div>
                    <textarea readOnly={true} className="writingArea scrollDesign">
                        멍게는 엄밀히 말해(어쨌든 오늘날 분류학자들에 따르면) 척추동물은 아니지만, 척삭이라는 척추와 비슷한 구조물을 가장 먼저 선구적으로 갖춘 생물 중 하나다.
                    </textarea>
                </div>
            </div>

            <div className="contentBoxFooter">
                <div style={{"marginRight" : "auto"}}></div>
                <div className="btn BackBtn" style={{"marginLeft": "auto"}} onClick={redirectToBack}>뒤로가기</div>
            </div>
        </>
    );

    return (
        <LibMainPage siteHeader={Header} siteBody={Body} />
    )
}