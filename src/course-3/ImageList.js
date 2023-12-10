import axios from "axios";
import { useEffect, useState } from "react";
import ImageShow from "./ImageShow";
import { async } from "q";

const unsplashUrl = "https://api.unsplash.com/search/photos";
const unsplashAccessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

async function search_animals(animal) {
  try {
    const response = await axios.get(unsplashUrl, {
      headers: {
        Authorization: `Client-ID ${unsplashAccessKey}`,
        "Accept-Version": "v1",
      },
      params: {
        query: animal,
        page: 1,
        per_page: 5,
        order_by: "relevant",
      },
    });
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}

function ImageList({ keyword }) {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (keyword) {
        const results = await search_animals(keyword);
        const listData = results.map((result) => result.links.download);
        setListData(listData);
      } else {
        setListData([]);
      }
    };

    fetchData();
  }, [keyword]);

  return (
    <div>
      <ImageShow listData={listData}></ImageShow>
    </div>
  );
}

export default ImageList;
