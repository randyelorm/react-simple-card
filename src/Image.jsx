import React from "react"


function Image(props) {
    return (
        <div>
            <img className ="my_image" src={props.imgUrl}/>
        </div>
    )
}


export default Image