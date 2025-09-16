import FeaturesNewsSection from "../../components/ui/FeuturedNewsSection"
import NewsHeader from "../../components/ui/NewsHeader"
export default function Business(){
    return(
        <div className="m-5">
            <NewsHeader category="business" labelCategory="Business"/>
            <FeaturesNewsSection category="business" label="Category"/>
        </div>
    )
}