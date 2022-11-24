import './css/Login.css'
import './css/Master.css'
import {useNavigate} from "react-router-dom";

export default function Login(props) {
    let navigate = useNavigate()

    const redirectToTrend = () => {
        navigate("/trend")
    }

    return(
        <div className="loginBox">
            <div className="loginTitle">
                <h2>로그인</h2>
            </div>
            <div className="loginContent">
                <div className="idPwBox">
                    <p> 아이디 </p>
                    <input className="input" id="id"/>
                    <p>비밀번호</p>
                    <input className="input" id="pw" type="password"/>
                    <input className="btn loginBtn" style={{"width": "130px", "height": "130px",  "margin": "35px 0 0 350px", "borderRadius": "50%"}} onClick={redirectToTrend}/>
                </div>
            </div>
        </div>
    )

}