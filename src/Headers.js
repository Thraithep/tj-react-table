import React from 'react';
import PropTypes from 'prop-types';

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
    headers: PropTypes.array.isRequired
};

export default Headers;