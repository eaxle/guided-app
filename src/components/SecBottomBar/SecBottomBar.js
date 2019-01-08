import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';
import './styles.css';

class SecBottomBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            curTab: "Explore"
        };
        this.changeTab = this.changeTab.bind(this);
    }

    getClassName(tab) {
        if (tab === this.state.curTab) {
            return "tab secActive";
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
            <Navbar className="mySecBtmBar" id="secBar">
                <Grid>
                    <Row className="bottomRow">
                        <Col xs={4}>
                            <div className={this.getClassName("Explore")} onClick={this.changeTab}>Explore</div>
                        </Col>
                        <Col xs={4}>
                            <div className={this.getClassName("Offered")} onClick={this.changeTab}>Offered</div>
                        </Col>
                        <Col xs={4}>
                            <div className={this.getClassName("Booked")} onClick={this.changeTab}>Booked</div>
                        </Col>
                    </Row>
                </Grid>
            </Navbar>
        )
    }
}

export default SecBottomBar;
