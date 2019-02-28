import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../login/loginStyles.css';

class GenderRegistrationScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            fName: '',
            lName: '',
            day: '',
            month: '',
            year: '',
            gender: 'M',
            countryCode: '',
            phone: ''
        };
        this.handleFormData = this.handleFormData.bind(this);
        this.toogleButton = this.toogleButton.bind(this);
        if (localStorage.getItem('gender')) {
            this.state.gender = localStorage.getItem('gender');

        }
    }

    toogleButton() {
        localStorage.setItem('gender', this.state.gender);
    }

    goBack() {
        window.history.back();
    }

    handleFormData(e) {
        this.setState({gender: e.target.value}, () => {
            localStorage.setItem('gender', this.state.gender);

        });
        console.log(this.state.gender)
    }

    render() {
        return (
            <div className="container-fluid text-center d-flex justify-content-center align-items-center container ">
                <div className="row col-sm-12 righttop ">
                    <button className="btn btnBack float-right" onClick={this.goBack}>Back</button>
                </div>
                <div className="row col-sm-12 welcome">Welcome to Guided
                </div>
                <div className="row">

                    <div className="col-sm-12 font-weight-bold subtitle">
                        <p>Whats your gender? </p>
                    </div>

                    <div className="col-sm-12 subsubtitle">
                        <p></p>
                    </div>
                </div>

                <div className="rowtablediv">

                    <table>
                        <tbody>
                        <tr>
                            <td><label>Male</label></td>
                            <td><input type="radio" value="M" name="gender" checked={this.state.gender === "M"}
                                       onChange={this.handleFormData}/></td>
                        </tr>
                        <tr>
                            <td><label>
                                Female</label></td>
                            <td><input type="radio" value="F" name="gender" checked={this.state.gender === "F"}
                                       onChange={this.handleFormData}/></td>
                        </tr>
                        <tr>
                            <td><label>Other</label></td>
                            <td><input type="radio" value="O" name="gender" checked={this.state.gender === "O"}
                                       onChange={this.handleFormData}/></td>
                        </tr>
                        <tr>
                            <td><input type="text"
                                       onChange={this.handleFormData}/></td>
                        </tr>
                        <tr>
                            <td><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad blanditiis illum nulla
                                praesentium quia quo, veritatis? Consequuntur nam quia tempora!</p>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="row col-sm-12 Continuebottonmargin">
                    <NavLink onClick={this.toogleButton} to={{
                        pathname: "/register/password",
                        state: {value: this.state}
                    }}
                             className="btn  btncreate generalbtn" disabled={this.state.disable}>
                        Continue
                    </NavLink>
                </div>
                <div className="row">
                    <div className="row font-weight-bold h5" id="account">Already have an account?</div>
                    <footer className="page-footer footer-costomized">step 4 of 6</footer>

                </div>
            </div>
        );
    }
}

export default GenderRegistrationScreen;
