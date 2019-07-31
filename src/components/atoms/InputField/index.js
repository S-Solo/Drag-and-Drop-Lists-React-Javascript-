import React, { forwardRef } from 'react';

import './styles.scss';

const InputField = forwardRef(({ className, ...props }, ref) =>
        <input ref={ref} className={`atom_input-field ${className}`} {...props} />
)
export default InputField;