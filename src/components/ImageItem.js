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
            <a target="_blank" rel="noreferrer" href={props.rawUrl}>
              <img src={props.rawUrl} className="w-100 rounded" alt="v" />
            </a>
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
          <span className="visually-hidden">unread messages</span>
        </span>
      </div>

      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div
          id="liveToast"
          className="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header">
            <img src="..." className="rounded me-2" alt="..." />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            />
          </div>
          <div className="toast-body">
            Hello, world! This is a toast message.
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageItem;
