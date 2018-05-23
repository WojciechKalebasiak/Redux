import uuid from 'uuid';
export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';
export const DELTE_COMMENT = 'DELETE_COMMENT';

function addComment(text) {
    return {
        type:ADD_COMMENT,
        id:uuid.v4(),
        text
    }
}
export const boundAddComment = text => dispatch(addComment(text));

function editComment(id,text) {
    return {
        type:EDIT_COMMENT,
        id,
        text
    }    
}
export const boundEditComment = (id,text) => dispatch(editComment(id,text));

function deleteComment(id) {
    return {
        type:DELTE_COMMENT,
        id
    }    
}
export const boundDeleteComment = id => dispatch(deleteComment(id));

function thumbUpComment(id) {
    return {
        type:THUMB_UP_COMMENT,
        id
    }    
}
export const boundThumbUpComment = id => dispatch(thumbUpComment(id));

function thumbDownComment(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id
    }    
}
export const boundThumbDownComment = id => dispatch(thumbDownComment(id));