import React, { useState } from "react";
import ImageItem from "./ImageItem";
import imageNotFound from "./imageNotFound.gif";

function Home(props) {
  const [text, setText] = useState("");
  const [imageArray, setImageArray] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const getImage = async () => {
    try {
      const url = `https://api.unsplash.com/search/photos?page=${page}&query=${
        text === "" ? "science" : text
      }&client_id=${props.apiKey}`;

      let data = await fetch(url);
      let parsedData = await data.json();

      if (parsedData.results.length === 0) {
        setImageArray([
          { urls: { regular: imageNotFound, thumb: imageNotFound } },
        ]);
      } else {
        setImageArray(parsedData.results);
        setTotalPages(parsedData.total_pages);
      }
    } catch (error) {
      setImageArray([
        { urls: { regular: imageNotFound, thumb: imageNotFound } },
      ]);
    }
  };

  const loadMoreImages = async () => {
    let previousImages = imageArray;
    try {
      const url = `https://api.unsplash.com/search/photos?page=${
        page + 1
      }&query=${text === "" ? "science" : text}&client_id=${props.apiKey}`;

      let data = await fetch(url);
      let parsedData = await data.json();

      setImageArray(previousImages.concat(parsedData.results));
      setPage(page + 1);
    } catch (error) {
      setImageArray([
        { urls: { regular: imageNotFound, thumb: imageNotFound } },
      ]);
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div id="top" className="container py-2">
        <div id="topped" className="row my-2">
          <div className="col">
            <div
              className="alert alert-warning alert-dismissible fade show"
              role="alert"
            >
              <strong>vImages : </strong> The best <b>free</b> stock photos and{" "}
              <b>royalty free</b> images.
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              />
            </div>
          </div>
        </div>

        <div className="row bg-secondary py-3 rounded mx-1 my-3">
          <div className="col-lg-6 h-50 m-auto">
            <div className="row">
              <div className="col-8">
                <input
                  className="w-100 h-100 fs-3 px-2 rounded border-0"
                  type="text"
                  value={text}
                  onChange={handleOnChange}
                  placeholder="Write keyword here..."
                />
              </div>
              <div className="col-4 position-relative">
                <button
                  className="btn btn-dark btn-sm w-100 h-100"
                  onClick={getImage}
                >
                  Get Images
                </button>
                <span
                  className={`${
                    props.quality === "high" ? "position-absolute" : "d-none"
                  } top-0 start-75 translate-middle badge rounded-pill bg-danger px-2`}
                >
                  HD
                  <span className="visually-hidden">unread messages</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="row text-center">
          {imageArray.map((element) => {
            return (
              <div className="col-md-4" key={element.urls.regular}>
                <ImageItem
                  rawUrl={
                    props.quality === "low"
                      ? element.urls.thumb
                      : element.urls.regular
                  }
                  quality={props.quality}
                />
              </div>
            );
          })}
        </div>

        <div className={`row py-5 ${totalPages === 0 ? "d-none" : ""}`}>
          <div className="col text-center">
            <button
              onClick={loadMoreImages}
              className={`btn btn-secondary w-100 my-2 ${
                page === totalPages ? "disabled" : ""
              }`}
            >
              Load More Images ( beta )
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
