// Properties.jsx
import React from 'react';

function Properties(props) {
    console.log("Properties", props.properties);
    if (props.properties === undefined) 
        return (
            <div></div>
        );
    

    return (
        <div> {
            props.properties.map((item, index) => (
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

export default Properties;
