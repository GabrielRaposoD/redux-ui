import { createSelectorHook } from 'react-redux';
import type { RootState } from 'redux/types';

const useTypedSelector = createSelectorHook<RootState>();

export { useTypedSelector };
