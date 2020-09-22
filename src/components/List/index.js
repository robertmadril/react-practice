import React from 'react';

function List(props) {
    return (
        <ul className="UnorderedList">
            {props.children}
        </ul>
    )
};

export default List;

