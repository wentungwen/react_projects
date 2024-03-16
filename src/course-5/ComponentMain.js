import Button from "./Button";
import { PiAlienLight, PiApplePodcastsLogo } from "react-icons/pi";
import { FcBullish, FcFilmReel } from "react-icons/fc";

export default function ComponentMain() {
  return (
    <>
      <Button primary>
        <PiAlienLight />
        Click
      </Button>
      <Button secondary outlined>
        <PiApplePodcastsLogo />
        Click！
      </Button>
      <Button success outlined>
      <FcBullish />
        Click
      </Button>
      <Button warning rounded outlined>
      <FcBullish />

        Click
      </Button>
      <Button danger rounded>
      <FcFilmReel />
        Click
      </Button>
      <Button info outlined>
      <FcFilmReel />
        Click
      </Button>
    </>
  );
}
