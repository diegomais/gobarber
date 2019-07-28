import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;

    const profile = Object.assign(
      { name, email },
      rest.oldPassword ? rest : {}
    );

    const response = yield call(api.put, 'users', profile);

    toast.success('Profile updated successfully.');

    yield put(updateProfileSuccess(response.data));
  } catch (error) {
    toast.error('Error updating profile, check your data.');
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
