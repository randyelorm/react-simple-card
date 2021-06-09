

import React, { Component } from 'react';

class Description extends Component {
    

    render() {
        return (
            <div>
                <p className ="my_description">
                  {this.props.descriptions}
                </p>
            </div>
        );
    }
}

export default Description;

