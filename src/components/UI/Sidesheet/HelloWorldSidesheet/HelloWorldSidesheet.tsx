import { Button } from 'components/Button';
import {
  ModalTypes,
  SidesheetIntrinsicProps,
  SidesheetTypes,
} from 'ducks/ui/types';
import { useUI } from 'hooks/useUI';

export interface HelloWorldSidesheetProps extends SidesheetIntrinsicProps {
  message: string;
}

const HelloWorldSidesheet: React.FC<HelloWorldSidesheetProps> = ({
  message,
}) => {
  const UI = useUI();
  return (
    <div className='gap-y-5 flex flex-col p-4'>
      <button>{message}</button>
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
};

export { HelloWorldSidesheet };
