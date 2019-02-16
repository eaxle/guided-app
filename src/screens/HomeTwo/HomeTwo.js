import React, {Component} from 'react';
import Sidebar from 'react-sidebar';
import TopBar from '../../components/TopBar';
import {Sidebar as sidebarContent, sidebarStyle} from '../Sidebar';
import BottomBar from '../../components/BottomBar';
import SecBottomBar from '../../components/SecBottomBar';
import Setting from '../Setting';
import PersonInf from '../Setting/personInf/PersonInf';
import './styles.css';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sidebarOpen: false,
            pName: '',
            lName: ''
        };

        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
        this.getData = this.getData.bind(this);
    }

    getData(pName, lName) {
        console.log('helo world!');
        this.setState({pName: pName, lName: lName})
    }

    onSetSidebarOpen() {
        this.setState((prevState) => ({sidebarOpen: !prevState.sidebarOpen}));
    }

    render() {
        let TagName = this.props.tagName || Setting;

        return (
            <div>
                <TopBar toggleSidebar={this.onSetSidebarOpen} pName={this.state.pName} lName={this.state.lName}/>
                <Sidebar sidebar={sidebarContent}
                         open={this.state.sidebarOpen}
                         onSetOpen={this.onSetSidebarOpen}
                         styles={sidebarStyle}>
                    <div className="content">
                        <TagName setData={this.getData}/>
                    </div>

                </Sidebar>

            </div>
        );
    }
}

export default Home;
