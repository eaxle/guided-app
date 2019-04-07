import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloProvider} from 'react-apollo';
import ApolloClient from "apollo-boost";
import './index.css';
import WelcomeView from './screens/welcome/welcome';
import PasswordRegistrationView from './screens/signup/PasswordRegistrationView';
import GenderRegistrationView from './screens/signup/GenderRegistrationView';
import EmailRegistrationView from './screens/signup/emailRegistration';
import NameRegistrationView from './screens/signup/NameRegistrationView';
import BirthdayRegistrationView from './screens/signup/BirthdayRegistrationView';
import PhoneNumberRegistrationView from './screens/signup/phoneNumberRegistration';
import LoginView from './screens/login/login';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ComponentBinder from './screens/ComponentBinder';
import SettingsView from './screens/Setting';
import PersonalInfoSettingsView from './screens/Setting/personInf/PersonInf';
import EditEmail from './screens/Setting/personInf/EditEmail';
import EditGender from './screens/Setting/personInf/EditGender';
import EditPhone from './screens/Setting/personInf/EditPhone';
import EditName from './screens/Setting/personInf/EditName';
import EditLanguage from './screens/Setting/personInf/EditLanguage';
import EditDOB from './screens/Setting/personInf/EditDOB';
import OfficialDoc from './screens/Setting/officialDocuments/OfficialDoc';
import PaymentSetting from './screens/Setting/payment/PaymentSetting';
import Security from './screens/Setting/security/Security';
import Privacy from './screens/Setting/privacy/Privacy';
import AdSettingsView from './screens/Setting/Ad/Ad';
import Notification from './screens/Setting/notification/Notification';
import Media from './screens/Setting/media/Media';
import ListingViewOwner from './screens/ListingViewOwner/ListingViewOwner';
import ProfileView from './8-views/profileView/profileView';
import Explore from './screens/Explore/exploreView';
import UserMenuMedia from './screens/new/User_Menu_Media';
import UserPostCommentImage from './screens/new/UserPostCommentImage';
import UserMediaSelectFromFolder from './screens/new/UserMediaSelectFromFolder';
import ReCaptchaView from './screens/signup/reCaptchaTest';

export const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_URI || "http://45.32.189.215:3000/graphql",
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <Router>
            <div>
                <Route exact path="/" render={pros => <Welcome{...pros}/>}/>
                <Switch>
                    <Route exact path="/register/password"
                           render={pros => <PasswordRegistrationView {...pros}/>}/>
                    <Route exact path="/register/gender"
                           render={pros => <GenderRegistrationView {...pros}/>}/>
                    <Route exact path="/register/phone"
                           render={pros => <PhoneNumberRegistrationView {...pros}/>}/>
                    <Route exact path="/register/dob"
                           render={pros => <BirthdayRegistrationView {...pros}/>}/>
                    <Route exact path="/register/email"
                           render={pros => <EmailRegistrationView {...pros}/>}/>
                    <Route exact path="/register"
                           render={pros => <EmailRegistrationView {...pros}/>}/>
                    <Route exact path="/register/final"
                           render={pros =>
                               <ReCaptchaView {...pros}/>}/>
                    <Route exact path="/register/name"
                           render={pros => <NameRegistrationView {...pros}/>}/>
                    <Route exact path="/login" render={pros => <LoginView {...pros}/>}/>
                    <Route exact path="/setting" render={pros => <ComponentBinder{...pros} tagName={SettingsView}/>}/>
                    <Route exact path="/setting/personInf"
                           render={pros => <ComponentBinder{...pros} tagName={PersonalInfoSettingsView}/>}/>
                    <Route exact path="/setting/PersonInf/email"
                           render={pros => <ComponentBinder{...pros} tagName={EditEmail}/>}/>
                    <Route exact path="/setting/PersonInf/phone"
                           render={pros => <ComponentBinder{...pros} tagName={EditPhone}/>}/>
                    <Route exact path="/setting/PersonInf/gender"
                           render={pros => <ComponentBinder{...pros} tagName={EditGender}/>}/>
                    <Route exact path="/setting/PersonInf/name"
                           render={pros => <ComponentBinder{...pros} tagName={EditName}/>}/>
                    <Route exact path="/setting/PersonInf/language"
                           render={pros => <ComponentBinder{...pros} tagName={EditLanguage}/>}/>
                    <Route exact path="/setting/PersonInf/dob"
                           render={pros => <ComponentBinder{...pros} tagName={EditDOB}/>}/>
                    <Route exact path="/setting/officialdoc"
                           render={pros => <ComponentBinder{...pros} tagName={OfficialDoc}/>}/>
                    <Route exact path="/setting/payment"
                           render={pros => <ComponentBinder{...pros} tagName={PaymentSetting}/>}/>
                    <Route exact path="/setting/security"
                           render={pros => <ComponentBinder{...pros} tagName={Security}/>}/>
                    <Route exact path="/setting/privacy"
                           render={pros => <ComponentBinder{...pros} tagName={Privacy}/>}/>
                    <Route exact path="/setting/ad" render={pros => <ComponentBinder{...pros} tagName={AdSettingsView}/>}/>
                    <Route exact path="/setting/media"
                           render={pros => <ComponentBinder{...pros} tagName={Media}/>}/>
                    <Route exact path="/setting/notification"
                           render={pros => <ComponentBinder{...pros} tagName={Notification}/>}/>
                    <Route exact path="/post" render={pros => <ComponentBinder{...pros} tagName={ListingViewOwner}/>}/>
                    <Route exact path="/profile" render={pros => <ComponentBinder{...pros} tagName={ProfileView}/>}/>
                    <Route exact path="/exploreView" render={pros => <ComponentBinder{...pros} tagName={Explore}/>}/>
                    <Route exact path="/media"
                           render={pros => <ComponentBinder{...pros} tagName={UserMenuMedia}/>}/>
                    <Route exact path="/comment"
                           render={pros => <ComponentBinder{...pros} tagName={UserPostCommentImage}/>}/>
                    <Route exact path="/folder"
                           render={pros => <ComponentBinder{...pros} tagName={UserMediaSelectFromFolder}/>}/>
                </Switch>
            </div>
        </Router>
    </ApolloProvider>,
    document.getElementById('root'));
registerServiceWorker();
