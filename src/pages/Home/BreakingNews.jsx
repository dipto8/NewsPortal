import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
export default function BreakingNews() {
    return (
        <div>
            <button class="btn btn-outline btn-primary">Breaking News</button>
            <Marquee className="">
           <Link className="mr-4" to="/">  Get live updates on the latest local, national, and international news, including trusted reporting on politics, health, business, sports and more |</Link>
           <Link to="/">Canada closes border between B.C.-U.S. crossing at Pacific Crest Trail</Link>
            </Marquee>
        </div>
    )
}
