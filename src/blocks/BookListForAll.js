import '../css/Master.css'
import '../css/LibMaster.css'
import {useNavigate} from "react-router-dom";

export default function BookListForAll(props) {
    const navigate = useNavigate()
    const limitPage = props.limitPage
    const books = props.books

    const redirectToShow = () => {
        navigate("/show")
    }

    // https://codingbroker.tistory.com/123
    const renderBooks = () => {
        const results = []
        const perPage = 5
        let lines = Math.max(1, Math.ceil(books.length / perPage))

        if(lines >= limitPage && limitPage !== 0)
            lines = limitPage

        for(let line = 0; line < lines; line++) {
            const subResults = []
            for(let x = 0; x < perPage; x++) {
                const index = line * perPage + x;

                if(index < books.length) {
                    subResults.push(<div className="book" key={index} onClick={() => redirectToShow(index)}></div>)
                } else {
                    subResults.push(<div className="book" key={index}/>)
                }
            }
            results.push(
                <div className="fiveBooks" key={"line" + line}>
                    {subResults}
                </div>
            )
        }

        return results
    }

    return (
        <div className="contentBoxBody">
            {renderBooks()}
        </div>
    );
}
