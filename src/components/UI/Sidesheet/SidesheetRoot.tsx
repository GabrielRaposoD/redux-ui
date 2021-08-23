import { sidesheetTypes } from './types';
import { useDispatch } from 'react-redux';
import { uiSlice } from 'ducks/ui';
import { useTypedSelector } from 'hooks/useTypedSelector';
import SidesheetBase from './SidesheetBase';
import { useUI } from 'hooks/useUI';

const SidesheetRoot: React.FC<{ level: number }> = ({ children, level }) => {
  const { componentList } = useTypedSelector((state) => state.ui);
  const dispatch = useDispatch();
  const UI = useUI();

  const currentSidesheet = componentList[level];

  const SidesheetComponent = sidesheetTypes[
    currentSidesheet?.type
  ] as React.ComponentType;

  return (
    <SidesheetBase
      isOpen={currentSidesheet?.open}
      close={() => {
        setTimeout(UI.operations.popComponentList, 500);
        dispatch(uiSlice.actions.closeUI());
      }}
      width={currentSidesheet?.props?.width}
    >
      {SidesheetComponent ? (
        <>
          <SidesheetComponent
            {...currentSidesheet?.props}
            close={() => {
              setTimeout(UI.operations.popComponentList, 500);
              dispatch(uiSlice.actions.closeUI());
            }}
          />
          {children}
        </>
      ) : (
        <>{children}</>
      )}
    </SidesheetBase>
  );
};

export { SidesheetRoot };
