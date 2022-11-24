import './css/Master.css';
import LibMainPage from "./pages/LibMainPage";
import {useNavigate} from "react-router-dom";

export default function Show2(props) {

    let navigate = useNavigate();

    const redirectToBack = () => {
        navigate("/my")
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
                    <div className="book"></div>
                    <textarea readOnly={true} className="writingArea fluid scrollDesign short">
                        세 바다가 한 바다가 되고
                        모든 대지 위에서 산맥들의 질주가 멈춘
                        그리고, 그런 것들에 누구도 신경쓰지 않는
                        꿈의 적서가 남김없이 규정된 시대에

                        한 남자가 호반에 서 있었다.
                    </textarea>
                </div>
            </div>

            <div className="contentBoxFooter">
                <div style={{"marginRight" : "auto"}}></div>
                <div className="threeBtnGroup">
                    <div className="btn btnLeft2"> 수정하기 </div>
                    <div className="btn btnRight2 " onClick={redirectToBack}>뒤로가기</div>
                </div>
            </div>
        </>
    );

    return (
        <LibMainPage siteHeader={Header} siteBody={Body} />
    )
}