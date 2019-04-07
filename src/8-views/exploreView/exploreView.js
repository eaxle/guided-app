import React, { Component } from 'react';
/*import { Button, Thumbnail, Image, Grid, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';
import AttriDisplay from '../../5-components/AttriDisplay';
import AttriEditor from '../../5-components/AttriEditor';
import OverflowText from '../../5-components/OverflowText';
import TextFrom from '../../5-components/TextForm';
import ListEditor from '../../5-components/ListEditor';
import MapSnap from '../../5-components/MapSnap';
import LocSearchBox from '../../5-components/LocSearchBox';
import EventTimeDisplay from '../../5-components/EventTimeDisplay';*/
import Sidebar from 'react-sidebar';
import Header from '../../5-components/TopBar';
import { Sidebar as sidebarContent, sidebarStyle } from '../Sidebar';
import NavComponent from '../../5-components/NavComponent';
import NavComponent from '../../5-components/NavComponent';
/*import ProfileImageAndIcon from '../../5-components/ProfileImageAndIcon';
import Bio from '../../5-components/Bio';*/
import Card from '../../5-components/Card';
import './styles.css';

class ExploreView extends Component {
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
                <Header toggleSidebar={this.onSetSidebarOpen}/>
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
                <NavComponent />
            </div>
        )

    }
}

export default ExploreView;
