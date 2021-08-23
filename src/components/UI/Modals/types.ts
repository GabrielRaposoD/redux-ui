import { ModalTypes } from 'ducks/ui/types';
import { HelloWorldModal, HelloWorldModalProps } from './HelloWorldModal';

export const modalTypes: { [key in ModalTypes]: React.ComponentType } = {
  [ModalTypes.HelloWorld]: HelloWorldModal,
};

export type { HelloWorldModalProps };
