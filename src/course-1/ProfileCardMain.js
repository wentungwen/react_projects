import ProfileCard from "./ProfileCard";
import Alexa from "../images/images-1/alexa.png";
import Cortana from "../images/images-1/cortana.png";

function profileCardMain() {
  return (
    <>
      <div className="section">
        <h1 className="title">First practice</h1>
        <div className="columns">
          <ProfileCard title="John Doe" handle="jdoe" image={Alexa} />
          <ProfileCard title="Jane Doe" handle="jane" image={Cortana} />
        </div>
      </div>
    </>
  );
}

export default profileCardMain;
