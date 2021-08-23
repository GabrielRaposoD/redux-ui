import { SidesheetTypes } from 'ducks/ui/types';
import {
  HelloWorldSidesheet,
  HelloWorldSidesheetProps,
} from './HelloWorldSidesheet/HelloWorldSidesheet';

export const sidesheetTypes: {
  [key in SidesheetTypes]: React.ComponentType | React.ReactNode;
} = {
  [SidesheetTypes.HelloWorld]: HelloWorldSidesheet,
};

export type { HelloWorldSidesheetProps };
