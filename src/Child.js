import React from 'react';

function Child(props)
{
    return (
    <div>
        <h1>Date Passed from parent: {props.DatePassed}</h1>
    </div>
    );
}

export default Child;