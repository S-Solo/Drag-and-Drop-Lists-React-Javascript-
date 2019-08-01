import {
    ADD_CONS,
    EDIT_CONS,
    DELETE_CONS,
    ADD_PROS,
    EDIT_PROS,
    DELETE_PROS,
} from 'constants/actionTypes';

export const addCons = (addIndex = null, addValue = '') => (dispatch) =>
    dispatch({ type: ADD_CONS, addIndex, addValue })

export const editCons = (editIndex, editValue) => (dispatch) =>
    dispatch({ type: EDIT_CONS, editIndex, editValue })

export const deleteCons = (deleteIndex) => (dispatch) =>
    dispatch({ type: DELETE_CONS, deleteIndex })

export const addPros = (addIndex = null, addValue = '') => (dispatch) =>
    dispatch({ type: ADD_PROS, addIndex, addValue })

export const editPros = (editIndex, editValue) => (dispatch) =>
    dispatch({ type: EDIT_PROS, editIndex, editValue })

export const deletePros = (deleteIndex) => (dispatch) =>
    dispatch({ type: DELETE_PROS, deleteIndex })