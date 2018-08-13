import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import IntlTelInput from 'react-intl-tel-input';
import /*'file?name=libphonenumber.js!*/'../../../node_modules/react-intl-tel-input/dist/libphonenumber.js';
import '../../../node_modules/react-intl-tel-input/dist/main.css';

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
        if (status == true) {
            this.setState({phone: number});
            this.disable = false;
        } else {
            this.setState({phone: ""});

            this.disable = true;

        }
    };

    checkStatus(e) {
        if (this.disable) {
            e.preventDefault();
        }
    }

    render() {
        return (
            <div className="container-fluid text-center d-flex justify-content-center align-items-center container ">
                <div className="row col-sm-12 text-center font-weight-bold text-capitalize h2">welcome to the guided
                </div>
                <div className="row">

                    <div className="col-sm-12 font-weight-bold h4">
                        Choose an account creation option
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-2 form-group">
                        {/*<input type="Number" onChange={this.handleFormData} placeholder="Country code" name="countryCode" className="col-sm-4 form-control form-control-sm  " />*/}
                        <IntlTelInput
                            preferredCountries={['au']}
                            onPhoneNumberChange={this.handler}
                            onPhoneNumberBlur={this.handler}
                            css={['intl-tel-input', 'form-control']}
                            utilsScript={'libphonenumber.js'}
                        />
                    </div>
                    <div className="col-sm-2 form-group">
                        {/*<input type="Number" placeholder="Phone Number" onChange={this.handleFormData} name="phone" className="col-sm-4 form-control form-control-sm  " />*/}
                    </div>
                </div>
                <div className="row col-sm-12">
                    <NavLink onClick={this.toogleButton} to={{
                        pathname: "/GenderRegistrationScreen",
                        state: {value: this.state}
                    }}
                             className="btn  btn-success" disabled={this.disable} onClick={this.checkStatus}>
                        Continue
                    </NavLink>
                </div>
                <div className="row">

                </div>
            </div>
        );
    }
}

export default PhoneNumberRegistrationScreen;