import React from 'react'

const NotFound = (props) =>
    <div>
        <h3>{props.errorText}</h3>
        <p>We are sorry but the page you are looking for does not exist.</p>
    </div>

export default NotFound