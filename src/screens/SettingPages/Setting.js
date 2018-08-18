import React, { Component } from 'react';
import { Button, Thumbnail, Image, Grid, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';
import AttriDisplay from '../../components/AttriDisplay';
import AttriEditor from '../../components/AttriEditor';
import OverflowText from '../../components/OverflowText';
import TextFrom from '../../components/TextForm';
import ListEditor from '../../components/ListEditor';
import MapSnap from '../../components/MapSnap';
import LocSearchBox from '../../components/LocSearchBox';
import EventTimeDisplay from '../../components/EventTimeDisplay';
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
