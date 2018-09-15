import React, { Component } from 'react';
import { Button, Thumbnail, Image, Grid, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';
import AttriDisplay from '../../components/AttriDisplay';
import AttriEditor from '../../components/AttriEditor';
import OverflowText from '../../components/OverflowText';
import TextFrom from '../../components/TextForm';
import ListEditor from '../../components/ListEditor';
import MapSnap from '../../components/MapSnap';
import LocSearchBox from '../../components/LocSearchBox';
import EventTimeDisplay from '../../components/EventTimeDisplay';
import Sidebar from 'react-sidebar';
import TopBar from '../../components/TopBar';
import { Sidebar as sidebarContent, sidebarStyle } from '../Sidebar';
import BottomBar from '../../components/BottomBar';
import SecBottomBar from '../../components/SecBottomBar';
import ProfileImageAndIcon from '../../components/ProfileImageAndIcon';
import './styles.css';

class Profile extends Component {
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

            <ProfileImageAndIcon/>
            <div className="container">
              <Grid>
                <Row>
                  <Col xs={12}>
                  <p className="attr">Bio</p>
                    <div>
                      <h7>This is your personal bio area.</h7>
                      <p>Tell us something interesting about yourself!</p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                  <p className="attr">Gender</p>
                    <div>
                      <h7>Male</h7>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                  <p className="attr">Date of Birth</p>
                    <div>
                      <h7>01 May 1990</h7>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                  <p className="attr">Languages Spoken</p>
                    <div>
                      <h7>English</h7>
                      <p>Chinese</p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                  <p className="attr">Certification</p>
                    <div>
                      <p>Area of Expertise: skydiving
                        Qualification Level: instructor
                        Issuing Authority: SkyDive Oz</p>
                    </div>
                  </Col>
                </Row>

              </Grid>

            </div>

            </div>

        </Sidebar>
        <BottomBar />
        <SecBottomBar/>

      </div>
    )

  }
}

export default Profile;
