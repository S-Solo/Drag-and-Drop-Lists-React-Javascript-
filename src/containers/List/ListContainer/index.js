import React, { useRef } from 'react';
import { useDrop } from 'react-dnd';

import {
    FlexBox,
    TextBlock,
    Divider,
    Container,
} from 'components/atoms';

import ListItem from '../ListItem';

import { LIST_ITEM } from 'constants/dragTypes';

import './styles.scss';

const ListContainer = ({
    title,
    list,
    addListItem,
    editListItem,
    deleteListItem,
}) => {

    const lastItemRef = useRef(null);

    const editHandler = (index, event) => {
        const { value } = event.target;
        if (value === '') {
            if (index === list.length - 1) {
                return;
            }
            deleteListItem(index);
            return;
        }
        if (index === list.length - 1) {
            editListItem(index, value);
            addListItem();
            event.target.focus();
            return;
        }
        editListItem(index, value);
    }

    const keyDownHandler = (e) => {
        if (e.keyCode === 13) {
            lastItemRef.current.focus();
        }
    }

    const onDropHandler = (item) => {
        editListItem(list.length - 1, item.value);
        addListItem();
        lastItemRef.current.blur();
    }

    const canDropHandler = (item) => {
        if (list.includes(item.value)) {
            return false;
        }
        return true;
    }

    const [{ isOver }, drop] = useDrop({
        accept: LIST_ITEM,
        canDrop: (item) => canDropHandler(item),
        drop: (item) => onDropHandler(item),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
        }),
    })

    return (
        <FlexBox column className="list-container">
            <FlexBox justify align className="list-header-container">
                <TextBlock className="list-header">
                    {title}
                </TextBlock>
            </FlexBox>
            <Divider type="horizontal" />
            <FlexBox
                column
                className="list-container-main"
                ref={drop}
            >
                {isOver && (
                    <Container
                        className="drop-isover"
                    />
                )}
                {list.map((el, index) =>
                    <ListItem
                        ref={index === list.length - 1 ? lastItemRef : null}
                        key={title + index}
                        index={index}
                        value={el}
                        editHandler={editHandler}
                        onKeyDown={keyDownHandler}
                        deleteListItem={deleteListItem}
                    />)}
            </FlexBox>
        </FlexBox>
    )
}

export default ListContainer;
