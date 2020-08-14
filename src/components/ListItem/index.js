import React from 'react';

function ListItem(props) {
    return (
        <li className = {props.color ? props.color : "red"}>
            {props.author}, {props.title}
        </li>
    )
};

export default ListItem;