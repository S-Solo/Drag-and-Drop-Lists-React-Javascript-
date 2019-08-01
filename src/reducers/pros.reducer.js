import { ADD_PROS, EDIT_PROS, DELETE_PROS } from 'constants/actionTypes';

const initialState = [
    "Speed",
    "Simplicity",
    "Popularity",
    "Updates",
    "",
];

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PROS:
            const { addIndex, addValue } = action;
            if (!addIndex) {
                return [...state, addValue];
            }
            else {
                const addedState = [...state];
                addedState.splice(addIndex, 0, addValue);
                return addedState;
            }
        case EDIT_PROS:
            const { editIndex, editValue } = action;
            const edited = [...state];
            edited[editIndex] = editValue;
            return edited;
        case DELETE_PROS:
            const { deleteIndex } = action;
            const deletedState = [...state];
            deletedState.splice(deleteIndex, 1);
            return deletedState;
        default:
            return state;
    }
}