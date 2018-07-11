import { createStore } from 'redux';
import reducers from '@redux/reducers';

const store = createStore(reducers);
export { store };
