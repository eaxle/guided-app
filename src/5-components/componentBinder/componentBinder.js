import React, {Component} from 'react';
import Sidebar from 'react-sidebar';
import Header from '../../5-components/header/header';
import {Sidebar as sidebarContent/*, sidebarStyle*/} from '../../5-components/sidebar/sidebar';
import NavComponent from '../../5-components/nav/nav';
// import './styles.css';

class ComponentBinder extends Component {
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
        const TagName = this.props.tagName;
        return (
            <div>
                <Header toggleSidebar={this.onSetSidebarOpen}/>
                <Sidebar sidebar={sidebarContent}
                         open={this.state.sidebarOpen}
                         onSetOpen={this.onSetSidebarOpen}
                         /*styles={sidebarStyle}*/>
                    <div className="content">
                        <TagName/>
                    </div>
                    <NavComponent/>
                </Sidebar>

            </div>
        );
    }
}

export default ComponentBinder;
