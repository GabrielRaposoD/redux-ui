import { Button } from 'components/Button';
import {
  ModalIntrinsicProps,
  ModalTypes,
  SidesheetTypes,
} from 'ducks/ui/types';
import { useUI } from 'hooks/useUI';

export interface HelloWorldModalProps extends ModalIntrinsicProps {
  message: string;
}

const HelloWorldModal: React.FC<HelloWorldModalProps> = ({ message }) => {
  const UI = useUI();
  return (
    <div
      className='gap-y-5 flex flex-col items-center text-center'
    >
      {message}
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

export { HelloWorldModal };
