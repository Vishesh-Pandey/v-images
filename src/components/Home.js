import React, { useState } from 'react'
import ImageItem from './ImageItem'
import loading from './loading.gif'
import search from './search.png'


function Home(props) {

    const [text, setText] = useState("")
    const [imageArray, setImageArray] = useState([])
    const [requiredImages, setRequiredImages] = useState([search])

    async function getImage() {
        setRequiredImages([loading])
        const url = `https://api.unsplash.com/search/photos?query=${(text === "") ? "random" : text}&client_id=CUoMn8YRFJuKjER5BQdzrVCGIwM1PTeACLuWWZGfzwg`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setImageArray(parsedData.results);
        let images = [];
        if (props.quality === "high") {
            imageArray.map((element) => {
                images.push(element.urls.regular)
            })
        }
        else {
            imageArray.map((element) => {
                images.push(element.urls.thumb)
            })
        }
        setRequiredImages(images)
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    return (
        <>
            <div className="container">

                <div className="row my-2">
                    <div className="col">
                        <div className="alert alert-warning alert-dismissible fade show" role="alert">
                            <strong>Update : </strong> Get both high and low quality images
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="alert"
                                aria-label="Close"
                            />
                        </div>

                    </div>
                </div>

                <div className="row my-2">
                    <div className="col">
                        <div className="alert alert-danger d-flex align-items-center" role="alert">
                            <svg width={20} xmlns="http://www.w3.org/2000/svg" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                            <div>Click on Get Images two times for new image to load.</div>
                        </div>

                    </div>
                </div>

                <div className="row bg-secondary py-2" >
                    <div className="col-lg-6 h-50 m-auto">
                        <div className="row">
                            <div className="col-8">
                                <input className='w-100 h-100 fs-3 px-2 rounded' type="text" value={text} onChange={handleOnChange} placeholder='Write keyword here...' />
                            </div>
                            <div className="col-4">
                                <button className="btn btn-dark btn-sm w-100 h-100" onClick={getImage}>Get Images</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row text-center">
                    {
                        requiredImages.map((element) => {
                            return <div className="col-md-4" key={element}>
                                <ImageItem rawUrl={element} quality={props.quality} />
                            </div>
                        })

                    }
                </div>

            </div>
        </>
    )
}

export default Home