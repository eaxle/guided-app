import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import './styles.css';

export const Sidebar  = (
    <div className="sidebarContainer">
        <ListGroup>
            <ListGroupItem className="type">Communicate</ListGroupItem>
            <ListGroupItem className="othertype"><img className="img" alt="10x10" src={'messagesample.jpg'} />
              Messages
              </ListGroupItem>
            <ListGroupItem className="othertype"><img className="img" alt="10x10" src={'messagesample.jpg'} />
            New Post or Listing</ListGroupItem>
            <ListGroupItem className="type">Manage</ListGroupItem>
            <ListGroupItem className="othertype"><img className="img" alt="10x10" src={'messagesample.jpg'} />Bookings</ListGroupItem>
            <ListGroupItem className="othertype"><img className="img" alt="10x10" src={'messagesample.jpg'} />Media</ListGroupItem>
            <ListGroupItem className="othertype"><img className="img" alt="10x10" src={'messagesample.jpg'} />Bookmarks</ListGroupItem>
            <ListGroupItem className="othertype"><img className="img" alt="10x10" src={'messagesample.jpg'} />Advertising</ListGroupItem>
            <ListGroupItem className="othertype"><img className="img" alt="10x10" src={'messagesample.jpg'} />Payments</ListGroupItem>
            <ListGroupItem className="othertype"><img className="img" alt="10x10" src={'messagesample.jpg'} />Settings</ListGroupItem>
            <ListGroupItem className="othertype"><img className="img" alt="10x10" src={'messagesample.jpg'} />Our Service</ListGroupItem>
            <ListGroupItem className="othertype"><img className="img" alt="10x10" src={'messagesample.jpg'} />Log Out</ListGroupItem>
        </ListGroup>
    </div>
);