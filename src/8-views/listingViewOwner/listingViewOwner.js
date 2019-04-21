import React, {Component} from 'react';
import {Button, Thumbnail, Image, Grid, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';
import AttriDisplay from '../../5-components/listing-do/AttriDisplay';
import AttriEditor from '../../5-components/listing-do/AttriEditor';
import OverflowText from '../../5-components/listing-do/OverflowText';
import TextFrom from '../../5-components/listing-do/TextForm';
import ListEditor from '../../5-components/listing-do/ListEditor';
import MapSnap from '../../5-components/listing-do/MapSnap';
import LocSearchBox from '../../5-components/listing-do/LocSearchBox';
// import EventTimeDisplay from '../../5-components/EventTimeDisplay';
import './styles.css';

class ListingViewOwner extends Component {
    constructor(props) {
        super(props);

        this.state = {
            AttriEditMode: false,
            DescriptionEditMode: false,
            ProvideEditMode: false,
            MeetLocEditMode: false,
            RequiredEditMode: false,
        }

        this.toggleEditAttri = this.toggleEditAttri.bind(this);
        this.toggleEditDescription = this.toggleEditDescription.bind(this);
        this.editDescription = this.editDescription.bind(this);
        this.toggleEditProvide = this.toggleEditProvide.bind(this);
        this.toggleEditMeetLoc = this.toggleEditMeetLoc.bind(this);
        this.editAttributes = this.editAttributes.bind(this);
        this.toggleEditRequire = this.toggleEditRequire.bind(this);
        this.editRequire = this.editRequire.bind(this);
    }

    toggleEditAttri() {
        this.setState((prevStat) => ({
            AttriEditMode: !prevStat.AttriEditMode
        }));
    }

    toggleEditDescription() {
        this.setState((prevStat) => ({
            DescriptionEditMode: !prevStat.DescriptionEditMode
        }));
    }

    editDescription(newDescription) {
        this.props.editDescription(newDescription);
        this.toggleEditDescription();
    }

    editAttributes(newAttributes) {
        this.props.editAttributes(newAttributes);
        this.toggleEditAttri();
    }

    toggleEditProvide() {
        this.setState(prevStat => ({
            ProvideEditMode: !prevStat.ProvideEditMode
        }))
    }

    toggleEditMeetLoc() {
        this.setState(prevStat => ({
            MeetLocEditMode: !prevStat.MeetLocEditMode
        }))
    }

    toggleEditRequire() {
        this.setState((prevStat) => ({
            RequiredEditMode: !prevStat.RequiredEditMode
        }))
    }

    editRequire(newRequired) {
        this.props.editRequire(newRequired);
        this.toggleEditRequire();
    }

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
                <Thumbnail alt="242x200" src="/sampleImg.jpg">
                    <Grid>
                        <Row>
                            <Col xs={8}>
                                <Image className="icon" src="/sampleIcon.jpg" circle/>
                            </Col>
                            <Col xs={4}>
                                <span className="attr right">{this.props.post.user}</span>
                            </Col>
                        </Row>
                    </Grid>
                    <div className="section">
                        {this.state.AttriEditMode ?
                            <span className="title">Attribute</span> :
                            <span className="title">{this.props.post.title}</span>
                        }
                        <a href="" onClick={this.toggleEditAttri}
                           className="title">{this.state.AttriEditMode ? "(Discard)" : "(Edit)"}</a>
                        {this.state.AttriEditMode ?
                            <AttriEditor post={this.props.post} handleSubmit={this.editAttributes}/> :
                            <AttriDisplay post={this.props.post}/>
                        }
                    </div>
                    <div className="section">
                        <span className="title">Description</span>
                        <a href="" onClick={this.toggleEditDescription}
                           className="title">{this.state.DescriptionEditMode ? "(Discard)" : "(Edit)"}</a>
                        {this.state.DescriptionEditMode ?
                            <TextFrom text={this.props.post.description} handleSubmit={this.editDescription}/> :
                            <OverflowText text={this.props.post.description}/>
                        }
                    </div>
                    <div className="section">
                        <span className="title">Whats provided?</span>
                        <a onClick={this.toggleEditProvide} href=""><span
                            className="title">{this.state.ProvideEditMode ? "(Discard)" : "(Edit)"}</span></a>
                        {this.state.ProvideEditMode ? <ListEditor/> :
                            <ListGroup>
                                {this.props.post.provided.map(ele => <ListGroupItem>{ele}</ListGroupItem>)}
                            </ListGroup>
                        }
                    </div>
                    <div className="section">
                        <span className="title">whats required of guests?</span>
                        <a onClick={this.toggleEditRequire} href=""
                           className="title">{this.state.RequiredEditMode ? "(Discard)" : "(Edit)"}</a>
                        {this.state.RequiredEditMode ? <ListEditor/> :
                            <ListGroup>
                                {this.props.post.required.map(ele => <ListGroupItem>{ele}</ListGroupItem>)}
                            </ListGroup>
                        }
                    </div>
                    <div className="section">
                        <span className="title">Accessibility Notes</span>
                        <a onClick={this.toggleEditRequire} href=""
                           className="title">{this.state.RequiredEditMode ? "(Discard)" : "(Edit)"}</a>
                        {this.state.RequiredEditMode ? <ListEditor/> :
                            <ListGroup>
                                {this.props.post.required.map(ele => <ListGroupItem>{ele}</ListGroupItem>)}
                            </ListGroup>
                        }
                    </div>

                    <div className="section">
                        <span className="title">Where will we meet?</span>
                        <a onClick={this.toggleEditMeetLoc} href=""><span
                            className="title">{this.state.MeetLocEditMode ? "(Discard)" : "(Edit)"}</span></a>
                        {this.state.MeetLocEditMode ? <LocSearchBox/> : <MapSnap/>
                        }
                    </div>
                    <div className="section">
                        <span className="title">When will we meet?</span>
                        {/*<EventTimeDisplay/>*/}
                    </div>
                    <div className="section">
                        <span className="title">Cancelation Policy</span>
                        <a onClick={this.toggleEditDescription}
                           className="title">{this.state.DescriptionEditMode ? "(Discard)" : "(Edit)"}</a>
                        {this.state.DescriptionEditMode ?
                            <TextFrom text={this.props.post.description} handleSubmit={this.editDescription}/> :
                            <OverflowText text={this.props.post.description}/>
                        }
                    </div>

                </Thumbnail>
            </div>
        )
    }
}

export default ListingViewOwner;
