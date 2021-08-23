import store from './store';
import rootReducer from './rootReducer';

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
