import React from 'react';

import './styles.scss';

const Divider = ({ type }) =>
        <div className={`${type === 'horizontal' ? 'atom_horizontal-divider' : 'atom_vertical-divider'}`} />

Divider.defaultProps = {
        type: 'horiztontal'
}

export default Divider;