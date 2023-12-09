import bird from "../images/images-2/bird.svg";
import cat from "../images/images-2/cat.svg";
import dog from "../images/images-2/dog.svg";
import heart from "../images/images-2/heart.svg";
import { useState } from "react";

const svgMap = {
  bird,
  cat,
  dog,
  heart,
};

function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);
  const handleClick = () => {
    setClicks(clicks + 1);
  };
  return (
    <>
      <div className="box w-200" onClick={handleClick}>
        <img
          alt="animal"
          src={svgMap[type]}
          style={{ width: 200, height: 200 }}
        />
        <img
          alt="heart"
          src={heart}
          style={{
            width: 10 + 10 * clicks,
            height: 10 + 10 * clicks,
          }}
        />
      </div>
    </>
  );
}

export default AnimalShow;
