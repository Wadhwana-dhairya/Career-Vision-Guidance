export const initialstate = false;

export const reducer = (state,action) => {
    if (action.type === 'user') {
        return action.payload;
    }
    return state;
}