
import Title from "./Title"
import Description from "./Description"
import Image from "./Image"
import img from './img.png';


import React, { Component } from 'react';

class SimpleCard extends Component {

    render() {
        return (
            <div className ="simpleCard_body">
                
                <div className="title_nd_descrip">
                    <Title title ="MY FIRST REACT SCHEMATIC"/>
                    <Description 
                    descriptions =
"This is a react Schematic. It contains a title, description and image components."
                    
                    />
                </div>
                
            <Image imgUrl ={img}/> 

            </div>
        );
    }
}

export default SimpleCard;


