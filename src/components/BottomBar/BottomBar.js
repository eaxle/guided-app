import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';
import './styles.css';

class BottomBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            curTab: "Post"
        }
        this.changeTab = this.changeTab.bind(this);
    }

    getClassName(tab) {
        if (tab === this.state.curTab) {
            return "tab active";
        } else {
            return "tab";
        }
    }

    changeTab(e) {
        this.setState({
            curTab: e.target.innerText
        })
    }

    render() {
        return (
            <Navbar className="myBtmBar">
                <Grid>
                    <Row className="bottomRow">
                        <Col xs={3}>
                            <div className={this.getClassName("Post")} onClick={this.changeTab}>Post</div>
                        </Col>
                        <Col xs={3}>
                            <div className={this.getClassName("Do")} onClick={this.changeTab}>Do</div>
                        </Col>
                        <Col xs={3}>
                            <div className={this.getClassName("Use")} onClick={this.changeTab}>Use</div>
                        </Col>
                        <Col xs={3}>
                            <div className={this.getClassName("Stay")} onClick={this.changeTab}>Stay</div>
                        </Col>
                    </Row>
                </Grid>
            </Navbar>
        )
    }
}

export default BottomBar;
