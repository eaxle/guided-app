import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Form from 'react-validation/build/form';
import './loginStyles.css';


class BirthdayRegistrationScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: this.props.location.state.value.email,
            fName: this.props.location.state.value.fName,
            lName: this.props.location.state.value.lName,
            day: '',
            month: '',
            year: ''
        };

        this.handleFormData = this.handleFormData.bind(this);
        console.log(this.props)
        if (localStorage.getItem('day')) {
            this.state.day = localStorage.getItem('day');
        }
        if (localStorage.getItem('month')) {
            this.state.month = localStorage.getItem('month');
        }
        if (localStorage.getItem('year')) {
            this.state.year = localStorage.getItem('year');
        }
    }

    handleFormData(event) {
        console.log(event.target.value)
        if (event.target.name === "day") {
            this.setState({day: event.target.value}, () => {
                localStorage.setItem('day', this.state.day);
            });
        } else if (event.target.name === "month") {
            this.setState({month: event.target.value}, () => {
                console.log(this.state)
                localStorage.setItem('month', this.state.month);

            });
        } else {
            this.setState({year: event.target.value}, () => {
                localStorage.setItem('year', this.state.year);

            });
        }
    }

    render() {
        let arrDay = new Array();
        let arrMonth = new Array();
        let arr = new Array();
        return (
            <div className="container-fluid text-center d-flex justify-content-center align-items-center container ">

                <div className="row col-sm-12 welcome">Welcome to Guided
                </div>
                <div className="row">

                    <div className="col-sm-12 subtitle">
                        <p>Whats your date of birth?</p>
                    </div>
                    <div className="col-sm-12 subsubtitle">
                        <p>This information wont be made public.</p>
                    </div>
                </div>


                <table>
                    <tbody>
                    <tr>
                        <td>
                            <div className="col-sm-4">
                                <select className="form-control  seletBOD minimal" name='day' id='dayddl'
                                        placeholder="Day" value={this.state.day} onChange={this.handleFormData}>
                                    <option>Day</option>
                                    {(function () {
                                        //debugger
                                        for (let i = 1; i < 32; i++) {
                                            arrDay.push(<option value={i} key={'day_' + i}>{i}</option>);
                                        }

                                    })()}
                                    {arrDay}
                                </select>
                            </div>
                        </td>
                        <td>
                            <div className="col-sm-4 ">
                                <select className="form-control seletBOD minimal" name='month' id='monthddl'
                                        placeholder="Month" value={this.state.month} onChange={this.handleFormData}>
                                    <option>Month</option>
                                    {(function () {
                                        for (let i = 1; i < 13; i++) {
                                            arrMonth.push(<option value={i} key={'month_' + i}>{i}</option>);
                                        }
                                    })()}
                                    {arrMonth}
                                </select>
                            </div>
                        </td>
                        <td>
                            <div className="col-sm-4 ">
                                <select className="form-control seletBOD minimal" name='year' id='yearddl'
                                        placeholder="Year" value={this.state.year} onChange={this.handleFormData}>
                                    <option>Year</option>
                                    {(function () {
                                        for (let i = 1994; i < new Date().getFullYear(); i++) {

                                            arr.push(<option value={i} key={'year_' + i}>{i}</option>);
                                        }
                                    })()}
                                    {arr}
                                </select>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>


                <Form className="form-inline">
                    <div className="form-group">
                        <div className="container-fluid">
                            <div className="row">
                            </div>
                        </div>
                    </div>
                </Form>
                <div className="row col-sm-12">
                    <NavLink onClick={this.toogleButton} to={{
                        pathname: "/PhoneNumberRegistrationScreen",
                        state: {value: this.state}
                    }}
                             className="btn btncreate generalbtn" disabled={this.state.disable}>
                        Continue
                    </NavLink>
                </div>
                <div className="row">
                    <div className="row font-weight-bold h5" id="account">Already have an account?</div>
                    <footer className="page-footer footer-costomized">step 2 of 6</footer>

                </div>
            </div>
        );
    }
}

export default BirthdayRegistrationScreen;
