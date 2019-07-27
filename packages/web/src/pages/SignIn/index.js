import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Enter a valid email.')
    .required('Email is required.'),
  password: Yup.string().required('Password is required.'),
});

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Email Address" />
        <Input name="password" type="password" placeholder="Password" />
        <button type="submit">Log in</button>
        <span>
          Don’t have an account? <Link to="/register">Sign up</Link>
        </span>
      </Form>
    </>
  );
}
