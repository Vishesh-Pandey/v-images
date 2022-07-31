import React, { useState } from 'react'
import loading from './loading.gif'
import search from './search.png'


function Home() {

    const [text, setText] = useState("")

    async function getImage() {
        let info = await fetch(`https://source.unsplash.com/random/500×500/?${text}`)
        let imageUrl = info['url']
        document.getElementById("getImage").src = imageUrl
    }

    function loadImage() {
        getImage()
        console.log(loading)
        document.getElementById("getImage").src = loading
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
                                <input className='w-100 h-100 fs-3 px-2' type="text" value={text} onChange={handleOnChange} placeholder='Write keyword here...' />
                            </div>
                            <div className="col-4">
                                <button className="btn btn-dark btn-sm w-100 h-100" onClick={loadImage}>Get Image</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 m-auto">
                        <img className='w-100' id="getImage" src={search} alt="" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home