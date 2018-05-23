import { ADD_COMMENT, EDIT_COMMENT, DELTE_COMMENT, THUMB_DOWN_COMMENT, THUMB_UP_COMMENT } from './actions';
function comments(state = [], action) {
    const others = state.filter(comment => comment.id !== action.id);
    const commentToUpdate = state.find(comment => comment.id === action.id);
    switch (action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votes: 0
            }, ...state];
        case DELTE_COMMENT:
            return others;
        case EDIT_COMMENT:
            commentToUpdate.text = action.text;
            return [commentToUpdate, ...others];
        case THUMB_UP_COMMENT:
            commentToUpdate.votes++;
            return [commentToUpdate, ...others];
        case THUMB_DOWN_COMMENT:
            commentToUpdate.votes--;
            return [commentToUpdate, ...others];
        default:
            return state;
    }
}
export default comments;