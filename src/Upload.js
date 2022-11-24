import './css/Master.css'
import LibMainPage from "./pages/LibMainPage";
import ThreeButtons from "./blocks/ThreeButtons";

export default function Upload(props) {
    const Header = (
        <>
            <h1 className="titleText more"> 독후감 작성 </h1>

        </>
    );

    const Body = (
        <>
            <div className="contentBoxBody">
                <div className="writingBox more column wide">
                    <div className="bookInfo">
                        <div className="book">제목 작성 후 클릭 <br/>(자동 업로드)</div>
                        <div className="bookInfoDetail">
                            <form method="POST">
                                <h3>도서 제목</h3>
                                <input/>
                                <h3>독서 기간</h3>
                                <div className="reading-period"><input type="date"/> <span>~</span> <input type="date"/>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div style={{"marginLeft": "600px", "marginBottom": "0.05px"}}>
                        <ThreeButtons/>
                    </div>
                    <textarea className="writingArea scrollDesign fluid short">
                        이상한 건 서로 속이면서도 아무런 상처를 입지 않고,
                        또 서로가 서로를 속이고 있다는 사실조차 알아차리지 못하는 듯,
                        인간의 삶에는 그야말로 멋지고 깨끗하고 밝고 명랑한 불신이 넘쳐난다는 것입니다.

                        내게는 서로 속이면서도 당당하게 살아가는,
                        또한 그렇게 살아갈 수 있는 자신을 가지고 있는 인간이 이해하기 어려웠습니다.
                    </textarea>
                </div>
            </div>
        </>
    );

    return (
        <LibMainPage siteHeader={Header} siteBody={Body}/>
    );

}