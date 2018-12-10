import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import IntlTelInput from 'react-intl-tel-input';
import /*'file?name=libphonenumber.js!*/'../../../node_modules/react-intl-tel-input/dist/libphonenumber.js';
import '../../../node_modules/react-intl-tel-input/dist/main.css';
import './loginStyles.css';

class PhoneNumberRegistrationScreen extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.location.state);
        // debugger;
        this.disable = true;
        this.state = {
            email: this.props.location.state.value.email,
            fName: this.props.location.state.value.fName,
            lName: this.props.location.state.value.lName,
            day: '',
            month: '',
            year: '',
            countryCode: '',
            phone: ''
        }
        this.handleFormData = this.handleFormData.bind(this);
        this.handler = this.handler.bind(this);
        this.checkStatus = this.checkStatus.bind(this);
        if (localStorage.getItem('phone')) {
            this.state.phone = localStorage.getItem('countryCode') + localStorage.getItem('phone');
        }
        if (localStorage.getItem('countryCode')) {
            this.state.countryCode = localStorage.getItem('countryCode');
        }
    }

    handleFormData(event) {
        if (event.target.name === "countryCode") {
            this.setState({countryCode: event.target.value});
        } else {
            this.setState({phone: event.target.value});
        }
    }

    handler(status, value, countryData, number, id) {
        console.log("status: " + status + "\n" + "value: " + value + "\n" + "countryData: " + JSON.stringify(countryData) + "\n" + "number: " + number + "\n id: " + id);
        if (status === true) {
            this.setState({countryCode: countryData.dialCode}, () => {
                localStorage.setItem('countryCode', this.state.countryCode)

            });
            this.setState({phone: number}, () => {

                localStorage.setItem('phone', value);
            });
            this.disable = false;
            //  alert(value)
        } else {
            this.setState({phone: ""}, () => {
                localStorage.setItem('phone', this.state.phone)
            });

            this.disable = true;

        }
    };

    goBack() {
        window.history.back();
    }

    checkStatus(e) {
        if (this.disable) {
            e.preventDefault();
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
                        <p>Whats your phone Number? </p>
                    </div>
                    <div className="col-sm-12 subsubtitle">
                        <p>We use this for two-factor authentication</p>
                        <p> and account recovery. This information </p>
                        <p>won’t be made public by default.</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-2 form-group">
                        <IntlTelInput
                            preferredCountries={['au']}
                            onPhoneNumberChange={this.handler}
                            onPhoneNumberBlur={this.handler}
                            css={['intl-tel-input', 'form-control']}
                            utilsScript={'libphonenumber.js'}
                            defaultValue={this.state.phone}
                        />
                    </div>
                </div>
                <div className="row col-sm-12 Continuebottonmargin">
                    <NavLink onClick={this.toogleButton} to={{
                        pathname: "/GenderRegistrationScreen",
                        state: {value: this.state}
                    }}
                             className="btn  btncreate generalbtn" disabled={this.disable} onClick={this.checkStatus}>
                        Continue
                    </NavLink>
                </div>
                <div className="row">
                    <div className="row font-weight-bold h5" id="account">Already have an account?</div>
                    <footer className="page-footer footer-costomized">step 3 of 6</footer>

                </div>
            </div>
        );
    }
}

export default PhoneNumberRegistrationScreen;
