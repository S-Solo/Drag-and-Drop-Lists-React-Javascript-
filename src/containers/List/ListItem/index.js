import React, { forwardRef } from 'react';
import { useDrag } from 'react-dnd';

import {
    FlexBox,
    TextBlock,
    InputField,
} from 'components/atoms';

import { LIST_ITEM } from 'constants/dragTypes';

import './styles.scss';

const ListItem = forwardRef(({
    index,
    value,
    onKeyDown,
    editHandler,
    deleteListItem }, ref) => {

    const [{ isDragging }, drag] = useDrag({
        item: { type: LIST_ITEM, value },
        end: () => deleteListItem(index),
        canDrag: () => value !== '',
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    })

    return (
        <FlexBox
            className="list-item"
            align
            ref={drag}
            style={{
                opacity: isDragging ? 0.5 : 1,
            }}
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
    onKeyDown: () => { },
    editHandler: () => { },
    deleteListItem: () => { },
    ref: null,
}

export default ListItem;