import FeaturesNewsSection from "../../components/ui/FeuturedNewsSection"
import NewsHeader from "../../components/ui/NewsHeader"
export default function General(){
    return(
        <div className="m-5">
            <NewsHeader category="general" labelCategory="General"/>
            <FeaturesNewsSection category="general" label="General"/>
        </div>
    )
}