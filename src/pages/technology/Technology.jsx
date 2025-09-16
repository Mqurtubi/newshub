import FeaturesNewsSection from "../../components/ui/FeuturedNewsSection"
import NewsHeader from "../../components/ui/NewsHeader"
export default function Technology(){
    return(
        <div className="m-5">
            <NewsHeader category="technology" labelCategory="Technology"/>
            <FeaturesNewsSection category="technology" label="Technology"/>
        </div>
    )
}