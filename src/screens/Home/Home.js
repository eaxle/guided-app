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
          <Post description={ item } ></Post>
        )}
        <BottomBar />
      </div>
    );
  }
}

export default Home;