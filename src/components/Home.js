import React, { useState } from 'react'
import ImageItem from './ImageItem'
import loading from './loading.gif'
import search from './search.png'


function Home() {

    const [text, setText] = useState("")
    const [imageArray, setImageArray] = useState([])

    async function getImage() {
        document.getElementById("searchSymbol").src = loading
        const url = `https://api.unsplash.com/search/photos?query=${text}&client_id=CUoMn8YRFJuKjER5BQdzrVCGIwM1PTeACLuWWZGfzwg`
        let data = await fetch(url)
        let parsedData = await data.json()
        setImageArray(parsedData.results)
        if (imageArray.length > 9) {
            document.getElementById("searchSymbol").style.display = "none"
        }
        else {
            document.getElementById("searchSymbol").src = search
            document.getElementById("searchSymbol").style.display = "inline-block"
            alert("Enter proper keyword")

        }
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    return (
        <>
            <div className="container">

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

                <div className="row">
                    <div className="col-lg-6 m-auto text-center">
                        <img id='searchSymbol' className='w-100 rounded' src={search} alt="" />
                    </div>
                </div>

                <div className="row bg-secondary">
                    {imageArray.map((element) => {
                        return <div className="col-md-4" key={element.urls.raw}>
                            <ImageItem rawUrl={element.urls.raw} />
                        </div>
                    })}
                </div>

            </div>
        </>
    )
}

export default Home