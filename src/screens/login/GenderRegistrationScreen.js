import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import './loginStyles.css';
class GenderRegistrationScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: this.props.location.state.value.email || '',
            fName: this.props.location.state.value.fName || '',
            lName: this.props.location.state.value.lName || '',
            day: this.props.location.state.value.day || '',
            month: this.props.location.state.value.month || '',
            year: this.props.location.state.value.year || '',
            gender: this.props.location.state.value.gender || 'm',
            countryCode: this.props.location.state.value.countryCode || '',
            phone: this.props.location.state.value.phone || ''
        }
        this.handleFormData = this.handleFormData.bind(this);
    }

    handleFormData(e) {
        e.preventDefault();
        this.setState({gender: e.target.value}, () => {
        });

    }

    render() {
        return (
            <div className="container-fluid text-center d-flex justify-content-center align-items-center container ">
                <div className="row col-sm-12 welcome">Welcome to Guided
                </div>
                <div className="row">

                    <div className="col-sm-12 font-weight-bold subtitle">
               <p>Whats your gender? </p>
           </div>

                    <div className="col-sm-12 subsubtitle">
             <p></p>
                </div></div>

                <div className="rowtablediv">

           <table>
               <tbody>
             <tr>
                    <td><label >Male</label></td>
               <td><input type="radio" value="m" name="gender"
                                                          checked onChange={this.handleFormData}/></td>
             </tr>
             <tr>
               <td><label>
                    Female</label></td>
               <td><input type="radio" value="f" name="gender"
                                                           onChange={this.handleFormData}/></td>
             </tr>
             <tr>
               <td><label >Other</label></td>
                    <td> <input type="radio" value="o" name="gender"
                                                           onChange={this.handleFormData}/></td>
             </tr></tbody>
           </table>
                </div>
                <div className="row col-sm-12 Continuebottonmargin">
                    <NavLink onClick={this.toogleButton} to={{
                        pathname: "/PasswordRegistrationScreen",
                        state: {value: this.state}
                    }}
                             className="btn  btncreate generalbtn" disabled={this.state.disable}>
                        Continue
                    </NavLink>
                </div>
                <div className="row"><div className="row font-weight-bold h5" id = "account" >Already have an account?</div>
          <footer className="page-footer footer-costomized">step 4 of 6</footer>

                </div>
            </div>
        );
    }
}
export default GenderRegistrationScreen;
