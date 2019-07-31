import React, { forwardRef } from 'react';
import {
    FlexBox,
    TextBlock,
    InputField,
} from 'components/atoms';

import './styles.scss';

const ListItem = forwardRef(({ index, value, changeHandler, onKeyDown }, ref) => {
    return (
        <FlexBox className="list-item" align>
            <TextBlock className="list-item-index">{index + 1}.</TextBlock>
            <InputField
                ref={ref}
                value={value}
                onChange={e => changeHandler(index, e)}
                className="list-item-input"
                onKeyDown={onKeyDown}
            />
        </FlexBox>
    )
})

ListItem.defaultProps = {
    index: 0,
    value: '',
    changeHandler: () => { }
}

export default ListItem;