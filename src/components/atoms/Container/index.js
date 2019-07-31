import React from 'react';

import './styles.scss';

const Container = ({ paper, className, ...props }) =>
    <div className={`${paper ? 'atom_paper-container' : ''} ${className}`} {...props} />

Container.defaultProps = {
    paper: false,
    className: '',
}

export default Container;