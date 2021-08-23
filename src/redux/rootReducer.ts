import { combineReducers } from '@reduxjs/toolkit';
import { uiSlice } from 'ducks/ui';

const rootReducer = combineReducers({ ui: uiSlice.reducer });

export default rootReducer;
