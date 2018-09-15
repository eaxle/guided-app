import React, { Component } from 'react';
import Sidebar from 'react-sidebar';
import TopBar from '../../components/TopBar';
import { Sidebar as sidebarContent, sidebarStyle } from '../Sidebar';
import BottomBar from '../../components/BottomBar';
import SecBottomBar from '../../components/SecBottomBar';
import CurrentPost from '../../containers/CurrentPost';
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




      this.state = {
        AttriEditMode: false,
        DescriptionEditMode: false,
        ProvideEditMode: false,
        MeetLocEditMode: false,
        RequiredEditMode: false,
      }

      this.toggleEditAttri = this.toggleEditAttri.bind(this);
      this.toggleEditDescription = this.toggleEditDescription.bind(this);
      this.editDescription = this.editDescription.bind(this);
      this.toggleEditProvide = this.toggleEditProvide.bind(this);
      this.toggleEditMeetLoc = this.toggleEditMeetLoc.bind(this);
      this.editAttributes = this.editAttributes.bind(this);
      this.toggleEditRequire = this.toggleEditRequire.bind(this);
      this.editRequire = this.editRequire.bind(this);
    }

    toggleEditAttri() {
      this.setState((prevStat) => ({
        AttriEditMode: !prevStat.AttriEditMode
      }));
    }

    toggleEditDescription() {
      this.setState((prevStat) => ({
        DescriptionEditMode: !prevStat.DescriptionEditMode
      }));
    }

    editDescription(newDescription) {
      this.props.editDescription(newDescription);
      this.toggleEditDescription();
    }

    editAttributes(newAttributes) {
      this.props.editAttributes(newAttributes);
      this.toggleEditAttri();
    }

    toggleEditProvide() {
      this.setState(prevStat => ({
        ProvideEditMode: !prevStat.ProvideEditMode
      }))
    }

    toggleEditMeetLoc() {
      this.setState(prevStat => ({
        MeetLocEditMode: !prevStat.MeetLocEditMode
      }))
    }

    toggleEditRequire(){
      this.setState((prevStat)=>({
        RequiredEditMode: !prevStat.RequiredEditMode
      }))
    }

    editRequire(newRequired){
      this.props.editRequire(newRequired);
      this.toggleEditRequire();
    }
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
            <CurrentPost />
          </div>

        </Sidebar>

      </div>
    );
  }
}

export default Home;
