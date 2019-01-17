//@info created by ramesh khadka 1/17/2019 8:30 p.m-9:03 p.m
import React, {Component} from 'react';
import './style.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSmile, faUpload, faCamera, faFileImage} from '@fortawesome/free-solid-svg-icons'
import Bottom_Image_Video_Folder from './Bottom_Image_Video_Folder';
import BottomBar from '../../components/BottomBar';

class UserPostCommentImage extends Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <div>
                <div className="user_media">
                    <span>Select Media</span>
                    <FontAwesomeIcon icon={faSmile}/>
                    <FontAwesomeIcon icon={faUpload}/>
                    <FontAwesomeIcon icon={faCamera}/>
                    <FontAwesomeIcon icon={faFileImage}/>
                    <br/>
                    <span>Use the tabs to find media stored across your account.</span>
                </div>
                <div className="grid_container">
                    <div className="grid_cols">
                        {/* <span className="glyphicon glyphicon-plus "></span>*/}

                    </div>
                    <div className="grid_cols">

                    </div>

                    <div className="grid_cols">


                    </div>
                    <div className="grid_cols">


                    </div>
                    <div className="grid_cols">


                    </div>
                    <div className="grid_cols">


                    </div>
                    <div className="grid_cols">


                    </div>
                    <div className="grid_cols">


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

export default UserPostCommentImage;
