import { uiSlice } from 'ducks/ui';
import { OpenModalPayload, OpenSidesheetPayload } from 'ducks/ui/types';
import { useDispatch } from 'react-redux';

export function useUI() {
  const dispatch = useDispatch();

  function openModal(modal: OpenModalPayload) {
    dispatch(uiSlice.actions.openModal(modal));
  }

  function openSidesheet(sidesheet: OpenSidesheetPayload) {
    dispatch(uiSlice.actions.openSidesheet(sidesheet));
  }

  function popComponentList() {
    dispatch(uiSlice.actions.popComponentList());
  }

  return {
    operations: {
      modal: { openModal },
      sidesheet: { openSidesheet },
      popComponentList: popComponentList,
    },
  };
}
