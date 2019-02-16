import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloProvider} from 'react-apollo';
import ApolloClient from "apollo-boost";
import './index.css';
import Welcome from './screens/login/welcome';
import PasswordRegistrationScreen from './screens/signup/PasswordRegistrationScreen';
import GenderRegistrationScreen from './screens/signup/GenderRegistrationScreen';
import EmailRegistration from './screens/signup/emailRegistration';
import NameRegistrationScreen from './screens/signup/NameRegistrationScreen';
import BirthdayRegistrationScreen from './screens/signup/BirthdayRegistrationScreen';
import PhoneNumberRegistration from './screens/signup/phoneNumberRegistration';
import Login from './screens/login/login';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import ComponentBinder from './screens/ComponentBinder/componentBinder';
import PersonInf from './screens/Setting/personInf/PersonInf';
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
import Ad from './screens/Setting/Ad/Ad';
import Notification from './screens/Setting/notification/Notification';
import Media from './screens/Setting/media/Media';
import PostDetail from './screens/PostDetail/PostDetail';
import Profile from './screens/Profile/Profile';
import Explore from './screens/Explore/explore';
import UserMenuMedia from './screens/new/User_Menu_Media';
import UserPostCommentImage from './screens/new/UserPostCommentImage';
import UserMediaSelectFromFolder from './screens/new/UserMediaSelectFromFolder';
export const client = new ApolloClient({
    uri: "http://45.32.189.215:3000/graphql",
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <Router>
            <CookiesProvider>
                <div>
                    <Route exact path="/" render={pros => <Welcome{...pros}/>}/>
                    <Switch>
                        <Route exact path="/register/password"
                               render={pros => <PasswordRegistrationScreen {...pros}/>}/>
                        <Route exact path="/register/gender"
                               render={pros => <GenderRegistrationScreen {...pros}/>}/>
                        <Route exact path="/register/phone"
                               render={pros => <PhoneNumberRegistration {...pros}/>}/>
                        <Route exact path="/register/dob"
                               render={pros => <BirthdayRegistrationScreen {...pros}/>}/>
                        <Route exact path="/register/email"
                               render={pros => <EmailRegistration {...pros}/>}/>
                        <Route exact path="/register/name"
                               render={pros => <NameRegistrationScreen {...pros}/>}/>
                        <Route exact path="/login" render={pros => <Login {...pros}/>}/>
                        <Route exact path="/setting" render={pros => <ComponentBinder{...pros}/>}/>
                        <Route exact path="/setting/personInf" render={pros => <ComponentBinder{...pros} tagName={PersonInf}/>} />
                        <Route exact path="/setting/PersonInf/email" render={pros => <ComponentBinder{...pros} tagName={EditEmail}/>}/>
                        <Route exact path="/setting/PersonInf/phone" render={pros => <ComponentBinder{...pros} tagName={EditPhone}/>}/>
                        <Route exact path="/setting/PersonInf/gender" render={pros => <ComponentBinder{...pros} tagName={EditGender}/>}/>
                        <Route exact path="/setting/PersonInf/name" render={pros => <ComponentBinder{...pros} tagName={EditName}/>}/>
                        <Route exact path="/setting/PersonInf/language" render={pros => <ComponentBinder{...pros} tagName={EditLanguage}/>}/>
                        <Route exact path="/setting/PersonInf/dob" render={pros => <ComponentBinder{...pros} tagName={EditDOB}/>}/>
                        <Route exact path="/setting/officialdoc" render={pros => <ComponentBinder{...pros} tagName={OfficialDoc}/>}/>
                        <Route exact path="/setting/payment" render={pros => <ComponentBinder{...pros} tagName={PaymentSetting}/>}/>
                        <Route exact path="/setting/security" render={pros => <ComponentBinder{...pros} tagName={Security}/>}/>
                        <Route exact path="/setting/privacy" render={pros => <ComponentBinder{...pros} tagName={Privacy}/>}/>
                        <Route exact path="/setting/ad" render={pros => <ComponentBinder{...pros} tagName={Ad}/>}/>
                        <Route exact path="/setting/media" render={pros => <ComponentBinder{...pros} tagName={Media}/>}/>
                        <Route exact path="/setting/notification" render={pros => <ComponentBinder{...pros} tagName={Notification}/>}/>
                        <Route exact path="/post" render={pros => <ComponentBinder{...pros} tagName={PostDetail}/>}/>
                        <Route exact path="/profile" render={pros => <ComponentBinder{...pros} tagName={Profile}/>}/>
                        <Route exact path="/explore" render={pros => <ComponentBinder{...pros} tagName={Explore}/>}/>
                        <Route exact path="/media" render={pros => <ComponentBinder{...pros} tagName={UserMenuMedia}/>}/>
                        <Route exact path="/comment" render={pros => <ComponentBinder{...pros} tagName={UserPostCommentImage}/>}/>
                        <Route exact path="/folder" render={pros => <ComponentBinder{...pros} tagName={UserMediaSelectFromFolder}/>}/>
                    </Switch>
                </div>
            </CookiesProvider>
        </Router>
    </ApolloProvider>,
    document.getElementById('root'));
registerServiceWorker();
