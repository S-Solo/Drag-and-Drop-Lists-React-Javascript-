import React, { useState, useRef } from 'react';
import {
    FlexBox,
    TextBlock,
    Divider,
} from 'components/atoms';

import ListItem from '../ListItem';

import './styles.scss';

const ListContainer = ({ title }) => {
    const [list, setList] = useState([
        "text1",
        "text2",
        "text3",
        "text4",
        "",
    ])
    const lastItemRef = useRef(null);
    const changeHandler = (index, event) => {
        if(event.target.value === '') {
            const newList = [...list];
            newList.splice(index, 1);
            setList(newList);
            return;
        }
        if (index === list.length - 1) {
            addHandler(index, event)
            return;
        }
        const newList = [...list];
        newList[index] = event.target.value;
        setList(newList);
    }

    const addHandler = (index, event) => {
        const newList = [...list];
        newList[index] = event.target.value;
        newList.push('');
        setList(newList);
        event.target.focus();
    }

    const keyDownHandler = (e) => {
        if(e.keyCode === 13) {
            lastItemRef.current.focus();
        }
    }

    return (
        <FlexBox column className="list-container">
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
                        changeHandler={changeHandler}
                        onKeyDown={keyDownHandler}
                    />)}
            </FlexBox>
        </FlexBox>
    )
}

export default ListContainer;
