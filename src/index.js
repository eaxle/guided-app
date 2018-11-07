import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloProvider} from 'react-apollo';
import ApolloClient from "apollo-boost";
import './index.css';
import Login from './screens/login/login';
import PasswordRegistrationScreen from './screens/login/PasswordRegistrationScreen';
import GenderRegistrationScreen from './screens/login/GenderRegistrationScreen';
import MainRegistrationScreen from './screens/login/MainRegistrationScreen';
import NameRegistrationScreen from './screens/login/NameRegistrationScreen';
import BirthdayRegistrationScreen from './screens/login/BirthdayRegistrationScreen';
import PhoneNumberRegistrationScreen from './screens/login/PhoneNumberRegistrationScreen';
import MainLoginPage from './screens/login/MainLoginPage';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import Home from './screens/HomeTwo/HomeTwo';
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
const client = new ApolloClient({
//  uri: process.env.REACT_APP_GRAPHQL_URI
    uri: "http://45.32.189.215:3000/graphql",
    /* fetchOptions: {
        mode: 'no-cors',
      },*/
});
//alert(process.env.REACT_APP_GRAPHQL_URI)
ReactDOM.render(
    <ApolloProvider client={client}>
        <Router>
            <CookiesProvider>
                <div>
                    <Route exact path="/" render={pros => <Login {...pros}/>}/>
                    <Switch>
                        <Route exact path="/PasswordRegistrationScreen"
                               render={pros => <PasswordRegistrationScreen {...pros}/>}/>
                        <Route exact path="/GenderRegistrationScreen"
                               render={pros => <GenderRegistrationScreen {...pros}/>}/>
                        <Route exact path="/PhoneNumberRegistrationScreen"
                               render={pros => <PhoneNumberRegistrationScreen {...pros}/>}/>
                        <Route exact path="/BirthdayRegistrationScreen"
                               render={pros => <BirthdayRegistrationScreen {...pros}/>}/>
                        <Route exact path="/MainRegistrationScreen"
                               render={pros => <MainRegistrationScreen {...pros}/>}/>
                        <Route exact path="/NameRegistrationScreen"
                               render={pros => <NameRegistrationScreen {...pros}/>}/>
                        <Route exact path="/MainLogin" render={pros => <MainLoginPage {...pros}/>}/>
                        <Route exact path="/setting" render={pros => <Home{...pros}/>}/>
                        <Route exact path="/setting/personInf" render={pros => <Home{...pros} tagName={PersonInf}/>} />
                        <Route exact path="/setting/PersonInf/email" render={pros => <Home{...pros} tagName={EditEmail}/>}/>
                        <Route exact path="/setting/PersonInf/phone" render={pros => <Home{...pros} tagName={EditPhone}/>}/>
                        <Route exact path="/setting/PersonInf/gender" render={pros => <Home{...pros} tagName={EditGender}/>}/>
                        <Route exact path="/setting/PersonInf/name" render={pros => <Home{...pros} tagName={EditName}/>}/>
                        <Route exact path="/setting/PersonInf/language" render={pros => <Home{...pros} tagName={EditLanguage}/>}/>
                        <Route exact path="/setting/PersonInf/dob" render={pros => <Home{...pros} tagName={EditDOB}/>}/>
                        <Route exact path="/setting/officialdoc" render={pros => <Home{...pros} tagName={OfficialDoc}/>}/>
                        <Route exact path="/setting/payment" render={pros => <Home{...pros} tagName={PaymentSetting}/>}/>
                        <Route exact path="/setting/security" render={pros => <Home{...pros} tagName={Security}/>}/>
                        <Route exact path="/setting/privacy" render={pros => <Home{...pros} tagName={Privacy}/>}/>
                        <Route exact path="/setting/ad" render={pros => <Home{...pros} tagName={Ad}/>}/>
                        <Route exact path="/setting/media" render={pros => <Home{...pros} tagName={Media}/>}/>
                        <Route exact path="/setting/notification" render={pros => <Home{...pros} tagName={Notification}/>}/>
                    </Switch>
                </div>
            </CookiesProvider>
        </Router>
    </ApolloProvider>,
    document.getElementById('root'));
registerServiceWorker();
