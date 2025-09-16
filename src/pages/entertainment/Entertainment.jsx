import FeaturesNewsSection from "../../components/ui/FeuturedNewsSection"
import NewsHeader from "../../components/ui/NewsHeader"
export default function Entertainment(){
    return(
        <div className="m-5">
            <NewsHeader category="entertainment" labelCategory="Entertainment"/>
            <FeaturesNewsSection category="entertainment" label="Entertainment"/>
        </div>
    )
}