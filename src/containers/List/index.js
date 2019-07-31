import React from 'react';

import {
    Container,
    FlexBox,
    Divider,
    TextBlock,
} from 'components/atoms';

import ListContainer from './ListContainer';

import './styles.scss';

const List = () => {
    return (
        <FlexBox justify align className="list-wrapper">
            <Container paper className="list-main">
                <FlexBox justify align className="header-container">
                    <TextBlock className="header-text">Should I eat at McDonalds?</TextBlock>
                </FlexBox>
                <FlexBox className="lists">
                    <ListContainer title="PROS" />

                    <Divider type="vertical" />

                    <ListContainer title="CONS" />
                </FlexBox>
            </Container>
        </FlexBox>
    )
}

export default List;