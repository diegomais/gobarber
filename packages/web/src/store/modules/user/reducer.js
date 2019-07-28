import produce from 'immer';

const initialState = {
  profile: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case '@auth/SIGN_IN_SUCCESS':
      return produce(state, draft => {
        draft.profile = payload.user;
      });
    default:
      return state;
  }
};
