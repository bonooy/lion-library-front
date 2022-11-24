import '../css/Master.css'
import '../css/LibMaster.css'
import {useNavigate} from "react-router-dom";

function ThreeButtons(props) {
    const navigate = useNavigate()

    const redirectTo = (link) => {
        navigate(link)
    }

    return (
        <div className="threeBtnGroup">
            <div className="btn btnLeft" onClick={() => redirectTo('/trend')}>인기</div>
            <div className="btn btnCenter" onClick={() => redirectTo('/my')}>MY</div>
            <div className="btn btnRight" onClick={() => redirectTo('/upload')}>기록</div>
        </div>
    )
}

export default ThreeButtons;