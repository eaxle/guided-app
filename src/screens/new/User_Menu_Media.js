//@info created by ramesh khadka 1/9/2019
import React, {Component} from 'react';
import './style.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircle} from '@fortawesome/free-solid-svg-icons'
import Bottom_Image_Video_Folder from './Bottom_Image_Video_Folder';
import BottomBar from '../../components/BottomBar';

class User_Menu_Media extends Component {
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
                        <FontAwesomeIcon icon={faCircle}/>
                    </div>

                    <div className="grid_cols">
                        <FontAwesomeIcon icon={faCircle}/>

                    </div>
                    <div className="grid_cols">
                        <FontAwesomeIcon icon={faCircle}/>

                    </div>
                    <div className="grid_cols">
                        <FontAwesomeIcon icon={faCircle}/>

                    </div>
                    <div className="grid_cols">
                        <FontAwesomeIcon icon={faCircle}/>

                    </div>
                    <div className="grid_cols">
                        <FontAwesomeIcon icon={faCircle}/>

                    </div>
                    <div className="grid_cols">
                        <FontAwesomeIcon icon={faCircle}/>

                    </div>

                </div>
                <div className="">
                    <Bottom_Image_Video_Folder/>
                    <BottomBar/>
                </div>
            </div>
        );
    }
}

export default User_Menu_Media;
