import FeaturesNewsSection from "../../components/ui/FeuturedNewsSection"
import NewsHeader from "../../components/ui/NewsHeader"
export default function Health(){
    return(
        <div className="m-5">
            <NewsHeader category="health" labelCategory="Health"/>
            <FeaturesNewsSection category="health" label="Health"/>
        </div>
    )
}