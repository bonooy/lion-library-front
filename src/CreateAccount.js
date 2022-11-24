import './css/CreateAccount.css'
import './css/Master.css'
import {useNavigate} from "react-router-dom";

export default function CreateAccount(props) {
    let navigate = useNavigate()

    const redirectToTrend = () => {
        navigate("/trend")
    }

    return(
        <div className="createBox">
            <div className="createTitle">
                <h2>회원가입</h2>
            </div>
            <div className="createContent">
                <div className="idPwBox2" style={{"marginTop" : "60px"}}>
                    <p> 아이디 </p>
                    <input className="input" id="id"/>
                    <p>비밀번호</p>
                    <input className="input" id="pw" type="password"/>
                    <p>비밀번호 확인</p>
                    <input className="input" id="checkPW" type="password"/>
                    <input className="btn createBtn" style={{"width": "130px", "height": "130px",  "margin": "0 0 0 380px", "borderRadius": "50%"}} onClick={redirectToTrend}/>
                </div>
            </div>
        </div>
    )

}