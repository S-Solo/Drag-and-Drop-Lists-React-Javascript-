import React, { useRef } from 'react';

import {
    FlexBox,
    TextBlock,
    Divider,
} from 'components/atoms';

import ListItem from '../ListItem';

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

    return (
        <FlexBox
            column
            className="list-container"
        >
            <FlexBox justify align className="list-header-container">
                <TextBlock className="list-header">
                    {title}
                </TextBlock>
            </FlexBox>
            <Divider type="horizontal" />
            <FlexBox column className="list-container-main">
                {list.map((el, index) =>
                    <ListItem
                        ref={index === list.length - 1 ? lastItemRef : null}
                        key={index}
                        index={index}
                        value={el}
                        editHandler={editHandler}
                        onKeyDown={keyDownHandler}
                        deleteListItem={deleteListItem}
                        addListItem={addListItem}
                        listLength={list.length}
                    />)}
            </FlexBox>
        </FlexBox>
    )
}

export default ListContainer;
