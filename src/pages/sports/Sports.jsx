import FeaturesNewsSection from "../../components/ui/FeuturedNewsSection"
import NewsHeader from "../../components/ui/NewsHeader"
export default function Sports(){
    return(
        <div className="m-5">
            <NewsHeader category="sports" labelCategory="Sports"/>
            <FeaturesNewsSection category="sports" label="Sports"/>
        </div>
    )
}