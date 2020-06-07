import React from 'react';

function Child(props)
{
    return (
    <div>
        <h1>Child Component - Date Passed from parent : {props.DatePassed}</h1>
    </div>
    );
}

export default Child;