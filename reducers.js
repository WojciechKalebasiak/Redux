import comments from './comments';
import users from './users';
import { combineReducers } from 'redux';
const app = combineReducers(
    {
        comments,
        users
    }
);
