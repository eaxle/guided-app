import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../loginView/loginStyles.css';

class GenderRegistrationView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gender: localStorage.getItem('gender') || 'Others',
            genderType: localStorage.getItem('gender_type') || 'O'
        }
        ;
        this.handleFormData = this.handleFormData.bind(this);
        this.toogleButton = this.toogleButton.bind(this);
        this.goBack = this.goBack.bind(this);
        if (localStorage.getItem('gender')) {
            this.state.gender = localStorage.getItem('gender');

        }
    }

    toogleButton() {
        localStorage.setItem('gender', this.state.gender);
        localStorage.setItem('gender_type', this.state.genderType);
    }

    goBack() {
        this.props.history.push('/register/phone');
    }

    handleFormData(e) {
        if (e.target.type.toLowerCase() === "radio") {
            this.setState({genderType: e.target.value}, () => {
                localStorage.setItem('gender', this.state.gender);
                if (this.state.genderType === 'F') {
                    this.setState({gender: "Female"})

                } else if (this.state.genderType === 'M') {
                    this.setState({gender: "Male"})
                } else {
                    this.setState({gender: "Other"})
                }

            });
        } else {
            this.setState({gender: e.target.value})
        }
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

                    <table className="table-gender">

                        <tbody>
                        <tr>
                            <td><label>Male</label></td>
                            <td><input type="radio" value="M" name="gender" checked={this.state.genderType === "M"}
                                       onChange={this.handleFormData}/></td>
                        </tr>
                        <tr>
                            <td><label>
                                Female</label></td>
                            <td><input type="radio" value="F" name="gender" checked={this.state.genderType === "F"}
                                       onChange={this.handleFormData}/></td>
                        </tr>
                        <tr>
                            <td><label>Other</label></td>
                            <td><input type="radio" value="O" name="gender" checked={this.state.genderType === 'O'}
                                       onChange={this.handleFormData}/></td>
                        </tr>
                        <tr>
                            <td><input type="text" value={this.state.gender}
                                       onChange={this.handleFormData}/></td>
                        </tr>
                        <tr>
                            <td><p>We encourage you to list the gender that you are most comfortable with. Doing so may
                                help you to better
                                find listings that fit you needs. You may enter text into this box to identify an
                                alternative gender if you so wish.
                                you do not have to enter a value in this box and if you do not, "other" will be
                                default. </p>
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
                             className="btn  btncreate generalbtn">
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

export default GenderRegistrationView;
