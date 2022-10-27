import React from "react";

function ImageItem(props) {
  const copyImageAddress = () => {
    navigator.clipboard.writeText(props.rawUrl);
  };

  return (
    <>
      <div className="col position-relative bg-light my-2 p-2 rounded border border-dark">
        <div className="row ">
          <div className="col">
            <img
              src={props.rawUrl}
              id="openImage"
              className="w-100 rounded"
              alt="v"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 m-auto">
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
          } top-0 start-100 translate-middle badge rounded-pill bg-danger px-2`}
        >
          HD
          <span className="visually-hidden">Image Quality</span>
        </span>
      </div>
    </>
  );
}

export default ImageItem;
