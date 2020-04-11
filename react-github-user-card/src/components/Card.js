import React from 'react';
import './Card.css';

export const Card = props => {
    return (
        <div id='main'>

            <img src = {props.user.avatar_url} alt = 'img' />
            <h2> Name: {props.user.name} </h2> 
            <p> Login: {props.user.login}</p>
            <p> Location: {props.user.location}</p>
            <p> Repos: {props.user.repos}</p>
            <p> Bio: {props.user.bio}</p>

        </div>
    );
};