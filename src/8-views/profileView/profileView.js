import React, {Component} from 'react';
import {Button, Thumbnail, Image, Grid, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';
/*import AttriDisplay from '../../5-components/AttriDisplay';
import AttriEditor from '../../5-components/AttriEditor';
import OverflowText from '../../5-components/OverflowText';
import TextFrom from '../../5-components/TextForm';
import ListEditor from '../../5-components/ListEditor';
import MapSnap from '../../5-components/MapSnap';
import LocSearchBox from '../../5-components/LocSearchBox';
import EventTimeDisplay from '../../5-components/EventTimeDisplay';*/
import Sidebar from 'react-sidebar';
import Header from '../../5-components/header/header';
import {Sidebar as sidebarContent} from '../../5-components/sidebar/sidebar';
import NavComponent from '../../5-components/nav/nav';
// import NavComponent from '../../5-components/NavComponent';
import ProfileImageAndIcon from '../../5-components/listing-do/ProfileImageAndIcon';
import Bio from '../../5-components/bio/bio';
// import './styles.css';

class ProfileView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sidebarOpen: false
        };

        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen() {
        this.setState((prevState) => ({sidebarOpen: !prevState.sidebarOpen}));
    }

    render() {

        return (
            <div>
                <Header toggleSidebar={this.onSetSidebarOpen}/>
                <Sidebar sidebar={sidebarContent}
                         open={this.state.sidebarOpen}
                         onSetOpen={this.onSetSidebarOpen}
                         /*styles={sidebarStyle}*/>
                    <div className="content">

                        <ProfileImageAndIcon/>
                        <Bio/>
                    </div>

                </Sidebar>
                <NavComponent/>
                <NavComponent/>

            </div>
        )

    }
}

export default ProfileView;
