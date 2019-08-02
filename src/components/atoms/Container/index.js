import React, { forwardRef } from 'react';

import './styles.scss';

const Container = forwardRef(({
    paper,
    className,
    ...props
}, ref) =>
    <div ref={ref} className={`${paper ? 'atom_paper-container' : ''} ${className}`} {...props} />
)

Container.defaultProps = {
    paper: false,
    className: '',
}

export default Container;