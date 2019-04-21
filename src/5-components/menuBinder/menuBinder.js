import React, {Component} from 'react';
import Sidebar from 'react-sidebar';
import Header from '../../5-components/header/header';
import {Sidebar as sidebarContent, sidebarStyle} from '../Sidebar';
import NavComponent from '../../5-components/NavComponent';
import NavComponent from '../../5-components/NavComponent';
import SettingsView from '../SettingsView';
import PersonalInfoSettingsView from '../SettingsView/personInf/PersonInf';
import './styles.css';

class menuBinder extends Component {
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
        let TagName = this.props.tagName || SettingsView;

        return (
            <div>
                <Header toggleSidebar={this.onSetSidebarOpen} pName={this.state.pName} lName={this.state.lName}/>
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

export default menuBinder;
