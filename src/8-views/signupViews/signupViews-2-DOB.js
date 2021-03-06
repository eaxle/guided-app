import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Form from 'react-validation/build/form';
import '../loginView/loginStyles.css';


class BirthdayRegistrationView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            day: '',
            month: '',
            year: ''
        };

        this.handleFormData = this.handleFormData.bind(this);
        if (localStorage.getItem('day')) {
            this.state.day = localStorage.getItem('day');
        }
        if (localStorage.getItem('month')) {
            this.state.month = localStorage.getItem('month');
        }
        if (localStorage.getItem('year')) {
            this.state.year = localStorage.getItem('year');
        }
        this.goBack = this.goBack.bind(this);
    }

    goBack() {
        this.props.history.push('/register/name');
    }

    handleFormData(event) {
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
        let arrDay = [];
        let arrMonth = [];
        let arr = [];

        return (
            <div className="container-fluid text-center d-flex justify-content-center align-items-center container ">
                <div className="row col-sm-12 righttop ">
                    <button className="btn btnBack float-right" onClick={this.goBack}>Back</button>
                </div>
                <div className="row col-sm-12 welcome">Welcome to Guided
                </div>
                <div className="row">

                    <div className="col-sm-12 subtitle">
                        <p>Whats your date of birth?</p>
                    </div>
                    <div className="col-sm-12 subsubtitle">
                        <p>This information won't be made public.</p>
                    </div>
                </div>
                <table className="table-dob">
                    <tbody>
                    <tr>
                        <td>
                            <div className="col-sm-4">
                                <select className="form-control  seletBOD minimal" name='day' id='dayddl'
                                        placeholder="Day" value={this.state.day}
                                        onChange={this.handleFormData}>
                                    <option>Day</option>
                                    {(function () {
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
                                        for (let i = new Date().getFullYear(); i >= 1925; i--) {

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
                    <NavLink to={{
                        pathname: "/register/phone",
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

export default BirthdayRegistrationView;
