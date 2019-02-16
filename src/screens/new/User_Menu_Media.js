//@info created by ramesh khadka 1/9/2019
import React, {Component} from 'react';
import './style.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircle} from '@fortawesome/free-solid-svg-icons'
import BottomImageVideoFolder from './Bottom_Image_Video_Folder';
import BottomBar from '../../components/BottomBar';

class UserMenuMedia extends Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <div>

                <div className="user_media">Media</div>
                <div className="grid_container">
                    <div className="grid_cols">
                        <span className="glyphicon glyphicon-plus "></span>

                    </div>
                    <div className="grid_cols">
                        <FontAwesomeIcon icon={faCircle} className="grid_cols_circle"/>
                    </div><div className="grid_cols">
                        <FontAwesomeIcon icon={faCircle} className="grid_cols_circle"/>
                    </div><div className="grid_cols">
                        <FontAwesomeIcon icon={faCircle} className="grid_cols_circle"/>
                    </div><div className="grid_cols">
                        <FontAwesomeIcon icon={faCircle} className="grid_cols_circle"/>
                    </div><div className="grid_cols">
                        <FontAwesomeIcon icon={faCircle} className="grid_cols_circle"/>
                    </div><div className="grid_cols">
                        <FontAwesomeIcon icon={faCircle} className="grid_cols_circle"/>
                    </div><div className="grid_cols">
                        <FontAwesomeIcon icon={faCircle} className="grid_cols_circle"/>
                    </div>
                    <div className="grid_cols">
                        <FontAwesomeIcon icon={faCircle} className="grid_cols_circle"/>
                    </div>


                </div>
                <div className="">
                    <BottomImageVideoFolder/>
                    <BottomBar/>
                </div>
            </div>
        );
    }
}

export default UserMenuMedia;
