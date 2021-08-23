import ModalBase from './ModalBase';
import { useDispatch } from 'react-redux';
import { uiSlice } from 'ducks/ui';
import { modalTypes } from './types';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { useUI } from 'hooks/useUI';

const ModalRoot: React.FC<{ level: number }> = ({ children, level }) => {
  const { componentList } = useTypedSelector((state) => state.ui);
  const dispatch = useDispatch();
  const UI = useUI();

  const CurrentModal = componentList[level];

  const ModalComponent = modalTypes[CurrentModal?.type] as React.ComponentType;

  return (
    <ModalBase
      isOpen={CurrentModal.open}
      close={() => {
        setTimeout(UI.operations.popComponentList, 500);
        dispatch(uiSlice.actions.closeUI());
      }}
    >
      {CurrentModal ? (
        <>
          <ModalComponent
            {...CurrentModal?.props}
            close={() => {
              dispatch(uiSlice.actions.closeUI());
              setTimeout(UI.operations.popComponentList, 500);
            }}
          />
          {children}
        </>
      ) : (
        <>{children}</>
      )}
    </ModalBase>
  );
};

export { ModalRoot };
