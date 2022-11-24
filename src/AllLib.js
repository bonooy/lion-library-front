import './css/Master.css';
import './pages/LibMainPage';
import BookListForAll from "./blocks/BookListForAll";
import LibMainPage from "./pages/LibMainPage";
import {useNavigate} from "react-router-dom";

export default function AllLib(props) {

    let navigate = useNavigate();

    const redirectToBack = () => {
        navigate("/trend")
    }

    const changeButtonType = () => {
        let now = document.getElementsByClassName('btnSort')[0];
        if (now.innerHTML === "최신순") {
            now.innerHTML = "인기순";
            now.style.backgroundColor = "#BA8889"
        } else {
            now.innerHTML = "최신순";
            now.style.backgroundColor = "rgba(221, 200, 189, 1)"
        }
    }

    const books = [{id:1},{id:2}, {id:3}, {id:4}, {id:5}]

    const Header = (
        <h1 className="titleText">모두의 서재</h1>
    );

    const Body = (
        <>
            <BookListForAll books={books} limitPage={0}/>
            <div className="contentBoxFooter">
                <div className="btn btnSort ByNewBtn" onClick={changeButtonType} style={{"marginRight": "auto"}}>최신순</div>
                <div className="btn BackBtn" style={{"marginLeft": "auto"}} onClick={redirectToBack}>뒤로가기</div>
            </div>
        </>
    );

    return (
        <LibMainPage siteHeader={Header} siteBody={Body} />
    )
}
