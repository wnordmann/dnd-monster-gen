// Actions.jsx
import React, {useState} from 'react';

function Actions(props) {
    console.log("Actions", props.actions);
    if (props.actions === undefined) 
        return (
            <div></div>
        );
    


    return (
        <div> {
            props.actions.map((item, index) => (
                <div key={index}>
                    <h3>{
                        item.name
                    }</h3>
                    <span>{
                        item.description
                    }</span>
                </div>
            ))
        } </div>
    );
}

export default Actions;
