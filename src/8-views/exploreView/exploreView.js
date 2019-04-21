import React, { Component } from 'react';
import Sidebar from 'react-sidebar';
import Header from '../../5-components/header/header';
import { Sidebar as sidebarContent/*, sidebarStyle */} from '../../5-components/sidebar/sidebar';
import NavComponent from '../../5-components/nav/nav';
import Card from '../../5-components/card/card';
// import './styles.css';

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
                         /*styles={sidebarStyle}*/>
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
