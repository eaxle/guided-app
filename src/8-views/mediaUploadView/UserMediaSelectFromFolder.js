//@info created by ramesh khadka 1/17/2019 8:30 p.m-9:03 p.m
import React, {Component} from 'react';
import './style.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFolder} from '@fortawesome/free-solid-svg-icons'
import BottomImageVideoFolder from './Bottom_Image_Video_Folder';
import NavComponent from '../../5-components/NavComponent';

class UserMediaSelectFromFolder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: "9x"
        }
        this.changeIconSize = this.changeIconSize.bind(this);
    }

    changeIconSize() {
        /*if (window.innerHeight > window.innerWidth) {
            this.setState({size: "9x"})
            console.log('hey heeeey')
        }*/
        console.log(window.outerWidth);
        /*if (window.outerWidth <= 700) {
            this.setState({size: "5x"})
        } else {
            this.setState({size: "9x"})

        }*/
    }

    componentDidMount() {
        window.addEventListener("resize", this.changeIconSize);
    }

    render() {
        return (
            <div>
                <div className="user_media">
                    <span>Select Media and then Continue</span>
                    <button className="btn ">Continue</button>
                    <br/>
                    <span>Use the tabs to find media stored across your account. Select + for upload options..</span>
                </div>
                <div className="grid_container">
                    <div className="grid_cols">
                        <span className="glyphicon glyphicon-plus "></span>
                    </div>

                    <FontAwesomeIcon icon={faFolder} className="font_awesome_folder" size={this.state.size}/>
                    <FontAwesomeIcon icon={faFolder} className="font_awesome_folder" size={this.state.size}/>
                    <FontAwesomeIcon icon={faFolder} className="font_awesome_folder" size={this.state.size}/>
                    <FontAwesomeIcon icon={faFolder} className="font_awesome_folder" size={this.state.size}/>
                    <FontAwesomeIcon icon={faFolder} className="font_awesome_folder" size={this.state.size}/>
                    <FontAwesomeIcon icon={faFolder} className="font_awesome_folder" size={this.state.size}/>

                </div>
                <div>
                    <BottomImageVideoFolder/>
                    <NavComponent/>
                </div>

            </div>
        );
    }
}

export default UserMediaSelectFromFolder;
