import React from 'react';

const button = (props) => {
    return (
        <div className='button'>
            <p>{props.label}</p>
        </div>
    );
}

export default button;