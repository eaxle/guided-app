import React, {Component} from 'react';
import MetaTags from 'react-meta-tags';
import {NavLink} from 'react-router-dom';
import '../loginView/loginStyles.css';

class WelcomeView extends Component {
    constructor(props) {
        super(props);
        this.state = {showComponent: false};
        this.handleChange = this.handleChange.bind(this);
        this._onButtonClick = this._onButtonClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        alert();
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    _onButtonClick() {
        this.setState({
            showComponent: true,
        });
    }

    render() {
        return (


            <div id="body" className="container-fluid text-center container">
                <MetaTags>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                </MetaTags>
                <div className="row col-sm-12 welcome">Welcome to Guided</div>
                <div id="parent1">
                    <div id="child1" className="col-sm-12 h5 subtitle">
                        <p>The social marketplace</p>
                        <p>for things to do or use,</p>
                        <p>and places to stay</p>
                    </div>

                    <div className="row">
                        <div className="row col-sm-12">
                            <NavLink
                                to="/register/email" className="btn btncreate generalbtn">
                                Create Account
                            </NavLink>
                        </div>
                        <div id="child2" className="row col-sm-12 center">or</div>
                        <div className="row col-sm-12"><NavLink className="btn btnlogin generalbtn"
                                                                to="/login">LoginView</NavLink></div>
                    </div>
                    <div id="child3" className="row font-weight-bold">
                        <p>By continuing, you agree to Guided's</p>
                        <p><a href="null">Terms</a>, <a href="null">Data Policy</a>, and <a href="null">Cookie
                            Policy</a>. </p>
                    </div>

                    <NavLink
                        to="#" className="row col-sm-12 subtitle font-weight-bold">
                        Continue as Guest
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default WelcomeView;
