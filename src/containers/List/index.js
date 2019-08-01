import React from 'react';
import { connect } from 'react-redux';

import {
    Container,
    FlexBox,
    Divider,
    TextBlock,
} from 'components/atoms';

import {
    addCons,
    editCons,
    deleteCons,
    addPros,
    editPros,
    deletePros,
} from 'actions/list.actions';

import ListContainer from './ListContainer';

import './styles.scss';

const List = ({
    pros,
    cons,
    addCons,
    editCons,
    deleteCons,
    addPros,
    editPros,
    deletePros,
}) => {
    return (
        <FlexBox justify align className="list-wrapper">
            <Container paper className="list-main">
                <FlexBox justify align className="header-container">
                    <TextBlock className="header-text">Why should one use JavaScript?</TextBlock>
                </FlexBox>
                <FlexBox className="lists">
                    <ListContainer
                        title="PROS"
                        list={pros}
                        addListItem={addPros}
                        editListItem={editPros}
                        deleteListItem={deletePros}
                    />

                    <Divider type="vertical" />

                    <ListContainer
                        title="CONS"
                        list={cons}
                        addListItem={addCons}
                        editListItem={editCons}
                        deleteListItem={deleteCons}
                    />
                </FlexBox>
            </Container>
        </FlexBox>
    )
}

const mapStateToProps = state => ({
    pros: state.pros,
    cons: state.cons,
})

export default connect(mapStateToProps, {
    addCons,
    editCons,
    deleteCons,
    addPros,
    editPros,
    deletePros,
})(List);