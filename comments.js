import { ADD_COMMENT, EDIT_COMMENT, DELTE_COMMENT, THUMB_DOWN_COMMENT, THUMB_UP_COMMENT } from './actions';
function comments(state = [], action) {
    switch (action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votes: 0
            }, ...state];
        case DELTE_COMMENT:
            const others = state.filter(comment => comment.id !== action.id);
            return others;
        case EDIT_COMMENT:
            const updatedComments = state.map(comment => {
                if (comment.id === action.id)
                    comment.text = action.text;
                return comment;
            });
            return updatedComments;
        case THUMB_UP_COMMENT:
            const updatedComments = state.map(comment => {
                if(comment.id===action.id)
                    comment.votes++;
                return comment;
            });
            return updatedComments;
        case THUMB_DOWN_COMMENT:
            const updatedComments = state.map(comment => {
                if (comment.id === action.id)
                    comment.votes--;
                return comment;
            });
            return updatedComments;
        default:
            return state;
    }
}
export default comments;