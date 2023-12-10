import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import { useState } from "react";

function ImageSearcherMain() {
  const [keyword, setKeyword] = useState("");
//   const [imagelist, setImagelist] = useState([]);

  return (
    <>
      <SearchBar
        onEmitValue={(keyword) => {
          setKeyword(keyword);
          console.log(keyword);
        }}
      ></SearchBar>
      <ImageList keyword={keyword}></ImageList>

    </>
  );
}

export default ImageSearcherMain;
