import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloProvider} from 'react-apollo';
import ApolloClient from "apollo-boost";
// import './index.css';
import WelcomeView from './8-views/welcomeView/welcomeView';
import PasswordRegistrationView from './8-views/signupViews/signupViews-5-Password';
import GenderRegistrationView from './8-views/signupViews/signupViews-4-Gender';
import EmailRegistrationView from './8-views/signupViews/signupViews-0-Email';
import NameRegistrationView from './8-views/signupViews/signupViews-1-Name';
import BirthdayRegistrationView from './8-views/signupViews/signupViews-2-DOB';
import PhoneNumberRegistrationView from './8-views/signupViews/signupViews-3-PhoneNumber';
import LoginView from './8-views/loginView/loginView';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ComponentBinder from './5-components/componentBinder/componentBinder';
import SettingsView from './8-views/settingsViews/settingsView';
import PersonalInfoSettingsView from './8-views/settingsViews/personalInfoSettingsView/personalInfoSettingsView';
import EditEmail from './8-views/settingsViews/personalInfoSettingsView/EditEmail';
import EditGender from './8-views/settingsViews/personalInfoSettingsView/EditGender';
import EditPhone from './8-views/settingsViews/personalInfoSettingsView/EditPhone';
import EditName from './8-views/settingsViews/personalInfoSettingsView/EditName';
import EditLanguage from './8-views/settingsViews/personalInfoSettingsView/EditLanguage';
import EditDOB from './8-views/settingsViews/personalInfoSettingsView/EditDOB';
import OfficialDocsSettingsView from './8-views/settingsViews/officialDocsSettingsView/officialDocsSettingsView';
import PaymentSettingsView from './8-views/settingsViews/paymentSettingsView/paymentSettingsView';
import SecuritySettingsView from './8-views/settingsViews/securitySettingsView/securitySettingsView';
import PrivacySettingsView from './8-views/settingsViews/privacySettingsView/privacySettingsView';
import AdSettingsView from './8-views/settingsViews/adSettingsView/adSettingsView';
import NotificationSettingsView from './8-views/settingsViews/notificationSettingsView/notificationSettingsView';
import ListingViewOwner from './8-views/listingViewOwner/listingViewOwner';
import ProfileView from './8-views/profileView/profileView';
import Explore from './8-views/exploreView/exploreView';
import UserMenuMedia from './8-views/mediaUploadView/User_Menu_Media';
import UserPostCommentImage from './8-views/mediaUploadView/UserPostCommentImage';
import UserMediaSelectFromFolder from './8-views/mediaUploadView/UserMediaSelectFromFolder';
import ReCaptchaView from './8-views/signupViews/signupViews-6-ReCaptcha';
import MediaSettingsView from "./8-views/settingsViews/mediaSettingsView/mediaSettingsView";

export const client = new ApolloClient({
    uri: "https://db.guided.app:3000/graphql",
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <Router>
            <div>
                <Route exact path="/" render={pros => <WelcomeView{...pros}/>}/>
                <Switch>
                    <Route exact path="/register/password"
                           render={pros => <PasswordRegistrationView {...pros}/>}/>
                    <Route exact path="/register/gender"
                           render={pros => <GenderRegistrationView {...pros}/>}/>
                    <Route exact path="/register/phone"
                           render={pros => <PhoneNumberRegistrationView {...pros}/>}/>
                    <Route exact path="/register/dob"
                           render={pros => <BirthdayRegistrationView {...pros}/>}/>
                    <Route exact path="/register/"
                           render={pros =>
                               <EmailRegistrationView {...pros}/>}/>
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
                           render={pros => <ComponentBinder{...pros} tagName={OfficialDocsSettingsView}/>}/>
                    <Route exact path="/setting/payment"
                           render={pros => <ComponentBinder{...pros} tagName={PaymentSettingsView}/>}/>
                    <Route exact path="/setting/security"
                           render={pros => <ComponentBinder{...pros} tagName={SecuritySettingsView}/>}/>
                    <Route exact path="/setting/privacy"
                           render={pros => <ComponentBinder{...pros} tagName={PrivacySettingsView}/>}/>
                    <Route exact path="/setting/ad"
                           render={pros => <ComponentBinder{...pros} tagName={AdSettingsView}/>}/>
                    <Route exact path="/setting/media"
                           render={pros => <ComponentBinder{...pros} tagName={MediaSettingsView}/>}/>
                    <Route exact path="/setting/notification"
                           render={pros => <ComponentBinder{...pros} tagName={NotificationSettingsView}/>}/>
                    <Route exact path="/post" render={pros => <ComponentBinder{...pros} tagName={ListingViewOwner}/>}/>
                    <Route exact path="/profile" render={pros => <ComponentBinder{...pros} tagName={ProfileView}/>}/>
                    <Route exact path="/explore" render={pros => <ComponentBinder{...pros} tagName={Explore}/>}/>
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
