import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

const ErrorText = styled.p`
  color: red;
`;

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

const validationSchema = Yup.object({
  name: Yup.string().required(),
  number: Yup.number().min(1).max(10),
});

const initialValues = {
  name: '',
  nubmer: '',
};

export const Phonebook = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <div>
          <label htmlFor="name">Name</label>
          <div>
            <Field name="name" type="text" placeholder="Full name" />
            <FormError name="name" />
          </div>
        </div>
        <div>
          <label htmlFor="nubmer">Number</label>
          <div>
            <Field name="nubmer" type="text" placeholder="Nubmer" />
            <FormError name="email" />
          </div>
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
