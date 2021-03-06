import { Button } from 'components/Button/';
import { ModalTypes, SidesheetTypes } from 'ducks/ui/types';
import { useUI } from 'hooks/useUI';

export default function Home() {
  const UI = useUI();
  return (
    <div className='flex flex-row gap-5 p-8'>
      <Button
        onClick={() => {
          UI.operations.modal.openModal({
            type: ModalTypes.HelloWorld,
            props: {
              message: 'Hello World',
            },
          });
        }}
        description='Open Modal'
      />
      <Button
        onClick={() => {
          UI.operations.sidesheet.openSidesheet({
            type: SidesheetTypes.HelloWorld,
            props: {
              message: 'Hello World',
            },
          });
        }}
        description='Open Sidesheet'
      />
    </div>
  );
}
