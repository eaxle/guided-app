import React, { Component } from 'react';
import TopBar from '../../components/TopBar';
import BottomBar from '../../components/BottomBar';
import Post from '../../components/Post';
import './styles.css';

import testPosts from '../../testPosts';

class Home extends Component {
  render() {
    return (
      <div>
        <TopBar />
        {testPosts.map((item) => 
          <Post 
            title={ item.title }
            user={ item.user }
            duration={ item.duration }
            location={ item.location }
            rating={ item.rating }
            price={ item.price }
            review={ item.review }
            guestNum={ item.guestNum }
          />
        )}
        <BottomBar />
      </div>
    );
  }
}

export default Home;