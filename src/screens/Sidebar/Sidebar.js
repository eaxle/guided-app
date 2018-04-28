import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import './styles.css';

const Sidebar = (
    <div className="sidebarContainer">
        <ListGroup>
            <ListGroupItem className="type">Communicate</ListGroupItem>
            <ListGroupItem>Messages</ListGroupItem>
            <ListGroupItem>New Post</ListGroupItem>
            <ListGroupItem>New Listing</ListGroupItem>
            <ListGroupItem className="type">Manage</ListGroupItem>
            <ListGroupItem>Media</ListGroupItem>
            <ListGroupItem>Bookmarks</ListGroupItem>
            <ListGroupItem>Advertising</ListGroupItem>
            <ListGroupItem>Payments</ListGroupItem>
            <ListGroupItem>Settings</ListGroupItem>
            <ListGroupItem>Our Service</ListGroupItem>
            <ListGroupItem>Log Out</ListGroupItem>
        </ListGroup>
    </div>
);
 
export default Sidebar;