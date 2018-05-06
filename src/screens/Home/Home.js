import React, { Component } from 'react';
import Sidebar from 'react-sidebar';
import TopBar from '../../components/TopBar';
import { Sidebar as sidebarContent, sidebarStyle } from '../Sidebar';
import BottomBar from '../../components/BottomBar';
import SecBottomBar from '../../components/SecBottomBar';
import Feed from '../Feed'
import './styles.css';

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
            <Feed />  
          </div>
          <SecBottomBar />
          <BottomBar />
        </Sidebar>
      </div>
    );
  }
}

export default Home;