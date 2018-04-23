import React, { Component } from 'react';
import { Thumbnail } from 'react-bootstrap';
import './styles.css';

class Post extends Component {
    state = {}

    render() { 
        return (  
            <Thumbnail alt="242*200">
                <p>{this.props.description}</p>
            </Thumbnail>
        )
    }
}
 
export default Post;
