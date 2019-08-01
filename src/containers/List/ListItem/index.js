import React, { forwardRef } from 'react';
import { useDrag } from 'react-dnd';

import {
    FlexBox,
    TextBlock,
    InputField,
} from 'components/atoms';

import './styles.scss';

const ListItem = forwardRef(({
    index,
    value,
    listLength,
    onKeyDown,
    addListItem,
    editHandler,
    deleteListItem,
    isDragging }, ref) => {
    const [{ opacity }, dragRef] = useDrag({
        item: { type: 'LIST_ITEM', value },
        collect: monitor => ({
            opacity: monitor.isDragging() ? 0.5 : 1,
        }),
    })

    return (
        <FlexBox
            className="list-item"
            align
            ref={dragRef}
            style={{opacity}}
        >
            <TextBlock className="list-item-index">{index + 1}.</TextBlock>
            <InputField
                ref={ref}
                value={value}
                onChange={e => editHandler(index, e)}
                className="list-item-input"
                onKeyDown={onKeyDown}
            />
        </FlexBox>
    )
})

ListItem.defaultProps = {
    index: 0,
    value: '',
    listLength: 0,
    editHandler: () => { },
    onKeyDown: () => { },
    addListItem: () => { },
    deleteListItem: () => { },
    ref: null,
}

export default ListItem;