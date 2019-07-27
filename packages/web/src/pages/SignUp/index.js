import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required.'),
  email: Yup.string()
    .email('Enter a valid email.')
    .required('Email is required.'),
  password: Yup.string()
    .min(6, 'At least 6 characters.')
    .required('Password is required.'),
});

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Full Name" />
        <Input name="email" type="email" placeholder="Email Address" />
        <Input name="password" type="password" placeholder="Password" />
        <button type="submit">Sign up</button>
        <span>
          Already have an account? <Link to="/">Login in</Link>
        </span>
      </Form>
    </>
  );
}
