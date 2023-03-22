import SectionTitle from "../SectionTitle";
import '../../App.css';
import { Fade } from "react-reveal";
import CfRating from "./CfRating";

export default function Leaderboard() {
  return (
    <section id="leaderboard">
      <SectionTitle title="NITA Leaderboard" />
      <div className="text-white">
        {/* <Fade duration={500} bottom> */}
        <CfRating/>
        {/* </Fade>       */}
      </div>
    </section>
  );
}
