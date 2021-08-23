import { HelloWorldModalProps } from 'components/UI/Modals/types';
import { HelloWorldSidesheetProps } from 'components/UI/Sidesheet/types';

export interface UiState {
  componentList: (Modal | Sidesheet)[];
}

//Modal

export enum ModalTypes {
  HelloWorld,
}

export type ModalIntrinsicProps = {
  close: () => void;
  isOpen: boolean;
  onAfterClose?: () => void;
};

export type ModalBaseProps<T> = T & ModalIntrinsicProps;

type ModalUseProps<P> = Omit<ModalBaseProps<P>, 'close' | 'isOpen'>;

interface Modal {
  type: ModalTypes;
  props?: any;
  open: boolean;
  componentType: 'modal';
}

export type OpenModalPayload = {
  type: ModalTypes.HelloWorld;
  props?: ModalUseProps<HelloWorldModalProps>;
};

//Sidesheet

export enum SidesheetTypes {
  HelloWorld,
}

export type SidesheetIntrinsicProps = {
  close: () => void;
  isOpen: boolean;
  onAfterClose?: () => void;
  width?: 'wide' | 'normal';
};

export type SidesheetBaseProps<T> = T & SidesheetIntrinsicProps;

type SidesheetUseProps<P> = Omit<SidesheetBaseProps<P>, 'close' | 'isOpen'>;

interface Sidesheet {
  type: SidesheetTypes;
  props?: any;
  open: boolean;
  componentType: 'sidesheet';
}

export type OpenSidesheetPayload = {
  type: SidesheetTypes.HelloWorld;
  props?: SidesheetUseProps<HelloWorldSidesheetProps>;
};
