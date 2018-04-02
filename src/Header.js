import React from 'react';

const Header = ({ header }) => {
    return(
        <div>{ header.title }</div>
    );
};

// Header.propTypes = {
//     header: React.PropTypes.object.isRequired
// };

export default Header;
