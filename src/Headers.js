import React from 'react';

import Header from './Header';

const Headers = ({ headers }) => {
    
    const val = headers.map((h) => {
        <Header header={ h }></Header>;
    });
    
    return(
        { val }
    );
};

Headers.propTypes = {
    headers: React.PropTypes.array.isRequired
};

export default Headers;