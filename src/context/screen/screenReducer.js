import { CHANGE_SREEN } from '../types';

const handlers = {
  [CHANGE_SREEN]: (state, { payload }) => ({
    ...state,
    state: payload.id,
  }),

  DEFAULT: (state) => state,
};

export const screeReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  handler(state, action);
};
