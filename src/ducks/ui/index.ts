import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UiState, OpenModalPayload, OpenSidesheetPayload } from './types';

const initialState: UiState = {
  componentList: [],
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState: initialState,
  reducers: {
    openModal: (state, action: PayloadAction<OpenModalPayload>) => {
      state.componentList.push({
        componentType: 'modal',
        open: true,
        ...action.payload,
      });
    },
    openSidesheet: (state, action: PayloadAction<OpenSidesheetPayload>) => {
      state.componentList.push({
        componentType: 'sidesheet',
        open: true,
        ...action.payload,
      });
    },
    popComponentList: (state) => {
      state.componentList.pop();
    },
    closeUI: (state) => {
      state.componentList[state.componentList.length - 1].open = false;
    },
  },
  extraReducers: {},
});

export default { uiSlice, uiActions: uiSlice.actions };
