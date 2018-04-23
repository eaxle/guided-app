import React, { Component } from 'react';
import TopBar from '../../components/TopBar';
import Post from '../../components/Post';
import './styles.css';

const testData = ["description0", "description1", "description2", "description3", "description4", "description5", "description6", "description7"];

class Home extends Component {
  render() {
    return (
      <div>
        <TopBar />
        {testData.map((item) => 
          <Post description={ item } ></Post>
        )}
      </div>
    );
  }
}

export default Home;