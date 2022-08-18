import React, { useState } from 'react'
import ImageItem from './ImageItem'
import loading from './loading.gif'
import search from './search.png'

function Low(props) {

    const [text, setText] = useState("")
    const [imageArray, setImageArray] = useState([])
    const [requiredImages, setRequiredImages] = useState([search])

    async function getImage() {
        const url = `https://api.unsplash.com/search/photos?query=${(text === "") ? "random" : text}&client_id=CUoMn8YRFJuKjER5BQdzrVCGIwM1PTeACLuWWZGfzwg`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setImageArray(parsedData.results);
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }



    return (
        <>
            <div className="container bg-secondary bg-opacity-50 py-2">

                <div className="row my-2">
                    <div className="col">
                        <div className="alert alert-warning alert-dismissible fade show" role="alert">
                            <strong>Update : </strong> Get both high and low quality images. Switch to <i>HD</i> images from <b>navigation bar.</b>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="alert"
                                aria-label="Close"
                            />
                        </div>

                    </div>
                </div>



                <div className="row bg-secondary py-3 rounded" >
                    <div className="col-lg-6 h-50 m-auto">
                        <div className="row">
                            <div className="col-8">
                                <input className='w-100 h-100 fs-3 px-2 rounded border-0' type="text" value={text} onChange={handleOnChange} placeholder='Write keyword here...' />
                            </div>
                            <div className="col-4">
                                <button className="btn btn-dark btn-sm w-100 h-100" onClick={getImage}>Get Images</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row text-center">
                    {
                        imageArray.map((element) => {
                            return <div className="col-md-4" key={element.urls.thumb}>
                                <ImageItem rawUrl={element.urls.thumb} quality={props.quality} />
                            </div>
                        })

                    }
                </div>

            </div>
        </>
    )
}

export default Low