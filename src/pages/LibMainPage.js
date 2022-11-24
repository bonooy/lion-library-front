import '../css/Master.css'
import '../css/LibMaster.css'

export default function LibMainPage(props) {
    return (
        <div className="libContentBox">
            <div className="libContentTitle">
                {props.siteHeader}
            </div>
            <div className="libContentBody">
                {props.siteBody}
            </div>
        </div>
    )
}