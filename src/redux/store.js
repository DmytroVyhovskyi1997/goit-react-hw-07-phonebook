import { configureStore } from '@reduxjs/toolkit';

import { slice } from './slice';
import { filter } from './filter';

const store = configureStore({
  reducer: {
    contacts: slice.reducer,
    filter: filter.reducer,
  },
});

export { store };
