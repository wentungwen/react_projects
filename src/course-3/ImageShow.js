import React from "react";

function ImageShow({ listData }) {
  return (
    <>
      <div className="columns  is-multiline">
        {listData.map((imageUrl, index) => (
          <div key={index} className="column is-3">
            <img className="image" src={imageUrl} alt={`Image ${index}`} />
          </div>
        ))}
      </div>
    </>
  );
}

export default ImageShow;
