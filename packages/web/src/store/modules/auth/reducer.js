import produce from 'immer';

const initialState = {
  token: null,
  signed: false,
  loading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case '@auth/SIGN_IN_SUCCESS':
      return produce(state, draft => {
        draft.token = payload.token;
        draft.signed = true;
      });
    default:
      return state;
  }
};
