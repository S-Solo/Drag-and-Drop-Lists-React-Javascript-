import { ADD_CONS, EDIT_CONS, DELETE_CONS } from 'constants/actionTypes';

const initialState = [
    "Client-Side Security",
    "Browser Support",
    "Single Inheritance",
    "",
];

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_CONS:
            const { addIndex, addValue } = action;
            if (!addIndex) {
                return [...state, addValue];
            }
            else {
                const addedState = [...state];
                addedState.splice(addIndex, 0, addValue);
                return addedState;
            }
        case EDIT_CONS:
            const { editIndex, editValue } = action;
            const editedState = [...state];
            editedState[editIndex] = editValue;
            return editedState;
        case DELETE_CONS:
            const { deleteIndex } = action;
            const deletedState = [...state];
            deletedState.splice(deleteIndex, 1);
            return deletedState;
        default:
            return state;
    }
}