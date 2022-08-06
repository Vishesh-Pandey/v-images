import React from 'react'


function ImageItem(props) {

    function copyImageAddress() {
        navigator.clipboard.writeText(props.rawUrl);
    }

    return (
        <>
            <div className="container bg-secondary mt-2 p-2 rounded border border-dark">
                <div className="row">
                    <div className="col">
                        <img src={props.rawUrl} className='w-100' />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 m-auto">
                        <button className="btn btn-dark w-100 my-1" id="copyImgAdd" onClick={copyImageAddress}>Copy Image Address</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageItem