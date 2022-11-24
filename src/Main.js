import './css/Main.css';
import'./css/Master.css';
import Arrow from './assets/images/Arrow.png'
import {useNavigate} from "react-router-dom";

export default function Main(props) {
    let navigate = useNavigate()

    const redirectTo = (page) => {
        navigate(page)
    }

    return(
        <div className="titleBox">
            <h1 className="titleName">사자의 서재</h1>
            <div className="indexBox">
                <div className="indexItem">
                    <div className="loReBox">
                        <div className="loReItem">
                            <div className="textBox">
                                <p>로그인</p>
                            </div>
                            <button className="mainBtn" onClick={() => redirectTo('/login')}>
                                <img src={Arrow} style={{"height":"50%", "marginRight": "11px"}}/>
                            </button>
                        </div>
                        <div className="loReItem">
                            <div className="textBox">
                                <p>회원가입</p>
                            </div>
                            <button className="mainBtn" onClick={() => redirectTo('/creation')}>
                                <img src={Arrow} style={{"height":"50%", "marginRight": "11px"}}/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="indexBoxDesign">
                    <div className="gap" style={{"width" : "8px"}}></div>
                    <div className="indexDesignItem"></div>
                    <div className="indexDesignItem"></div>
                    <div className="indexDesignItem"></div>
                    <div className="indexDesignItem"></div>
                </div>
            </div>
        </div>
    )
};