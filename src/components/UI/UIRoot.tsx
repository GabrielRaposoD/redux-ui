import { useTypedSelector } from 'hooks/useTypedSelector';
import { ModalRoot } from './Modals/ModalRoot';
import { SidesheetRoot } from './Sidesheet/SidesheetRoot';

interface UIRootProps {
  level?: number;
}

const UIRoot: React.FC<UIRootProps> = ({ level = 0 }) => {
  const { componentList } = useTypedSelector((state) => state.ui);

  if (!componentList.length) {
    return <></>;
  }

  const CurrentComponent =
    componentList[level].componentType === 'modal' ? ModalRoot : SidesheetRoot;

  console.log(componentList[level].props);

  return (
    <>
      <CurrentComponent level={level}>
        {componentList.length - 1 > level ? <UIRoot level={level + 1} /> : null}
      </CurrentComponent>
    </>
  );
};

export { UIRoot };
