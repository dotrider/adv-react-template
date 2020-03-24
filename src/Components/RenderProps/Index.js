import React from 'react';
import Hover from './Hover';

function Index() {
    return (
        <div>
            <h1>Render Props</h1>
            <Hover render={hovering => <div>Is Hovering? {hovering ? 'yes' : 'no'}</div>}/>
        </div>
    )
}

export default Index
