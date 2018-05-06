import React, { Component } from 'react';
import Post from '../../components/Post';

import testPosts from '../../testPosts';

class Feed extends Component {
    render() { 
        return (
            <div>
                {
                    testPosts.map((item) =>
                        <Post
                            title={item.title}
                            user={item.user}
                            duration={item.duration}
                            location={item.location}
                            rating={item.rating}
                            price={item.price}
                            review={item.review}
                            guestNum={item.guestNum}
                        />
                    )
                }
            </div>
        )
    }
}
 
export default Feed;