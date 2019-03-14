import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import './styles.css';

class Setting extends Component {
    render() {
        return (
            <div>
                <div className="floatButtonGroup">
                    <div>
                        <Button className="floatButton publish">Publish</Button>
                    </div>
                    <div>
                        <Button className="floatButton draft">Draft</Button>
                    </div>
                    <div>
                        <Button className="floatButton delete">Delete</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Setting;
