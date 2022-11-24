import './css/Master.css'
import LibMainPage from "./pages/LibMainPage";
import BookListForMy from "./blocks/BookListForMy";
import ThreeButtons from "./blocks/ThreeButtons";
import {useState} from "react";

export default function MyLib(props) {

    const data = [{id: 0, title: '별 표시된 책만'}];

    const [checkItems, setCheckItems] = useState([]);

    const handleSingleCheck = (checked, id) => {
        if (checked) {
            // 단일 선택 시 체크된 아이템을 배열에 추가
            setCheckItems(prev => [...prev, id]);
        } else {
            // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
            setCheckItems(checkItems.filter((el) => el !== id));
        }
    };

    const books = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}];

    const Header = (
        <>
            <h1 className="titleText">내가 작성한 도서</h1>
        </>
    );

    const Body = (
        <>
            <BookListForMy books={books} limitPage={0}/>
            <div className="starCheck">
                {data?.map((data, key) => (
                    <tr key={key} style={{"marginLeft": "auto"}}>
                        <td>
                            <input type='checkbox' style={{"zoom":"1.5"}} name={`select-${data.id}`}
                                   onChange={(e) => handleSingleCheck(e.target.checked, data.id)}
                                // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
                                   checked={checkItems.includes(data.id) ? true : false} />
                        </td>
                        <td className='secondRow'>{data.title}</td>
                    </tr>
                ))}
            </div>

            <div className="contentBoxFooter" style={{"marginLeft": "auto"}}>
                <ThreeButtons/>
            </div>
        </>
    );

    return (
        <LibMainPage siteHeader={Header} siteBody={Body}/>
    );
};