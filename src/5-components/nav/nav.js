import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';
// import './styles.css';

class NavComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            curTab: "Post"
        };
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
            <Navbar className="c-nav">
                <Grid>
                    <Row className="c-nav__tab-primary">
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
                    <Row className="c-nav__tab-secondary">
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

export default NavComponent;
