import React, { Component } from 'react';
/*import { Button, Thumbnail, Image, Grid, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';
import AttriDisplay from '../../components/AttriDisplay';
import AttriEditor from '../../components/AttriEditor';
import OverflowText from '../../components/OverflowText';
import TextFrom from '../../components/TextForm';
import ListEditor from '../../components/ListEditor';
import MapSnap from '../../components/MapSnap';
import LocSearchBox from '../../components/LocSearchBox';
import EventTimeDisplay from '../../components/EventTimeDisplay';*/
import Sidebar from 'react-sidebar';
import TopBar from '../../components/TopBar';
import { Sidebar as sidebarContent, sidebarStyle } from '../Sidebar';
import BottomBar from '../../components/BottomBar';
import SecBottomBar from '../../components/SecBottomBar';
/*import ProfileImageAndIcon from '../../components/ProfileImageAndIcon';
import Bio from '../../components/Bio';*/
import Card from '../../components/Card';
import './styles.css';

class Explore extends Component {
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
                        <div className="BlankHeight">
                            <p> this is used to make up of the space of the top </p>
                        </div>
                        <Card/>
                        <Card/>
                        <Card/>
                        <div className="BlankHeight">
                            <p> this is used to make up of the space of the bottom </p>
                            <p> this is used to make up of the space of the bottom </p>
                        </div>
                    </div>
                </Sidebar>
                <BottomBar />
                <SecBottomBar/>

            </div>
        )

    }
}

export default Explore;
