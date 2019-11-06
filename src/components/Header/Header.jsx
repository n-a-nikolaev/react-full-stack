import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
    render() {
        const { appName } = this.props;
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">{appName}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>
        );
    }
}

Header.propTypes = {
    appName: PropTypes.string.isRequired
}

export default Header;
