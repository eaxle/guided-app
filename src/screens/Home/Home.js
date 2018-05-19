import React, { Component } from 'react';
import Sidebar from 'react-sidebar';
import TopBar from '../../components/TopBar';
import { Sidebar as sidebarContent, sidebarStyle } from '../Sidebar';
import BottomBar from '../../components/BottomBar';
import SecBottomBar from '../../components/SecBottomBar';
// import Feed from '../Feed';
import PostDetail from '../PostDetail';
import './styles.css';

import testPosts from '../../testPosts';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarOpen: false
    }

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen() {
    this.setState((prevState) => ({ sidebarOpen: !prevState.sidebarOpen }));
  }

  render() {
    return (
      <div>
        <TopBar toggleSidebar={this.onSetSidebarOpen}/>
        <Sidebar sidebar={sidebarContent}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={sidebarStyle}>
          <div className="content">
            <PostDetail
              title={testPosts[0].title}
              user={testPosts[0].user}
              duration={testPosts[0].duration}
              location={testPosts[0].location}
              rating={testPosts[0].rating}
              price={testPosts[0].price}
              review={testPosts[0].review}
              guestNum={testPosts[0].guestNum}
              description={testPosts[0].description}
              provide={testPosts[0].provide}
              required={testPosts[0].required}
              accessibility={testPosts[0].accessibility}
              address={testPosts[0].address}
             />  
          </div>
          <SecBottomBar />
          <BottomBar />
        </Sidebar>
      </div>
    );
  }
}

export default Home;