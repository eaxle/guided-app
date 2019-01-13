//@info created by ramesh khadka 1/9/2019
import React, {Component} from 'react';
import './style.css';

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
                        2
                    </div>

                    <div className="grid_cols">
                        3
                    </div>
                    <div className="grid_cols">
                        4
                    </div>
                    <div className="grid_cols">
                        5
                    </div>
                    <div className="grid_cols">
                        6
                    </div>
                    <div className="grid_cols">
                        6
                    </div>
                    <div className="grid_cols">
                        6
                    </div>

                </div>
            </div>
        );
    }
}

export default User_Menu_Media;
