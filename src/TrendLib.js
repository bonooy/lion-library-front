import './css/Master.css'
import LibMainPage from "./pages/LibMainPage";
import ThreeButtons from "./blocks/ThreeButtons";
import BookListForAll from "./blocks/BookListForAll";
import {useNavigate} from "react-router-dom";

export default function TrendLib(props) {
    let navigate = useNavigate();

    const redirectToAll = () => {
        navigate("/all")
    }

    const books = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}];

    const Header = (
        <>
            <h1 className="titleText">실시간 인기 도서</h1>
        </>
    );

    const Body = (
        <>
            <BookListForAll books={books} limitPage={1}/>
            <div className="contentBoxFooter">
                <div className="btn" style={{"marginRight": "auto"}} onClick={redirectToAll}>전체보기</div>
                <ThreeButtons/>
            </div>
        </>
    );

    return (
        <LibMainPage siteHeader={Header} siteBody={Body}/>
    );

}