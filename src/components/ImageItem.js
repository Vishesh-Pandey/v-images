import "../App.css";
import React from "react";
import loading from "../assets/loading.gif";
import { useState } from "react";
import { useEffect } from "react";

function ImageItem(props) {
  const [image, setImage] = useState(loading);
  const copyImageAddress = () => {
    navigator.clipboard.writeText(props.rawUrl);
  };

  useEffect(() => {
    setTimeout(() => {
      setImage(props.rawUrl);
    }, 200);
  }, []);

  return (
    <>
      <div
        id="image-item"
        className="col position-relative bg-light my-2 p-2 rounded border border-dark"
      >
        <div className="row ">
          <div className="col">
            <img src={image} id="openImage" className="w-100 rounded" alt="v" />
          </div>
        </div>
        <div className="row">
          <div className="col m-auto">
            <button
              className="btn btn-dark w-100 my-1"
              id="copyImgAdd"
              onClick={copyImageAddress}
            >
              Copy Image Address
            </button>
          </div>
        </div>
        <span
          className={`${
            props.quality === "high" ? "position-absolute" : "d-none"
          } top-0 start-100 translate-middle badge rounded-pill bg-danger px-2 mt-3`}
        >
          HD
          <span className="visually-hidden">Image Quality</span>
        </span>
      </div>
    </>
  );
}

export default ImageItem;
