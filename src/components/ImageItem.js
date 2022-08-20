import React from 'react'


function ImageItem(props) {

    function copyImageAddress() {
        navigator.clipboard.writeText(props.rawUrl);
    }

    return (
        <>
            <div className="col position-relative bg-secondary my-2 p-2 rounded border border-dark">
                <div className="row ">
                    <div className="col">
                        <a target="_blank" href={props.rawUrl}>
                            <img src={props.rawUrl} className='w-100' />
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 m-auto">
                        <button className="btn btn-dark w-100 my-1" id="copyImgAdd" onClick={copyImageAddress}>Copy Image Address</button>
                    </div>
                </div>
                <span className={`${props.quality === "high" ? "position-absolute" : "d-none"} top-0 start-100 translate-middle badge rounded-pill bg-danger px-2`}>
                    HD
                    <span className="visually-hidden">unread messages</span>
                </span>
            </div>

        </>
    )
}

export default ImageItem