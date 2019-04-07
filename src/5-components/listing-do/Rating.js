import React, { Component } from 'react';

class Rating extends Component {
    render() { 
        let stars = [0, 0, 0, 0, 0];
        for(let i = 0; i < this.props.rating; i++) {
            stars[i] = 1;
        }
        return (
            <div>     
                {stars.map((item) => 
                    item === 1 ? <span class="glyphicon glyphicon-star" aria-hidden="true"></span> 
                        : <span class="glyphicon glyphicon-star-empty" aria-hidden="true"></span>
                )}
            </div>
        )
    }
}
 
export default Rating;