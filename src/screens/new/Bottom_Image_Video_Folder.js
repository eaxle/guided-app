//@info created by ramesh khadka 1/16/2019
import React, {Component} from 'react';
import './Bottom_Image_Video_Folder.css';

class Bottom_Image_Video_Folder extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <ul className="footer_nav_123">
                <li>
                    Images
                </li>
                <li>
                    Videos
                </li>
                <li>
                    Folders
                </li>
            </ul>
        );
    }
}

export default Bottom_Image_Video_Folder;
