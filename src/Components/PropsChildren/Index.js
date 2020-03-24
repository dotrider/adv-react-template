import React from 'react';
import Hover from './Hover';

export default function Index(props) {
    return (
        <div>
            <h1>Props.Children</h1>
            <Hover>
                {hovering => <div>Is hovering? {hovering ? 'yes' : 'no'}</div>}
            </Hover>
        </div>
    )
}   
