import React  from "react";

const ImageList =({source}) => {
    return(
        source.map((img, idx) => (
            <>
            <div>
                <img src={img} alt={"img_"+idx} key={"img_"+idx} width="100"></img>
            </div>
            </>
        ))
    );
}

export default ImageList;