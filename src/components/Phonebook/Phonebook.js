import { useState } from 'react';
import { InputName } from './Input/InputName/InputName';
import { LabelPhoneBook } from './Label/Label';
import { ButtonSubmit } from './Button/ButtonSubmit';
import { InputNumber } from './Input/InputNumber/inputNumber';
import { FormPhonebook } from './Form/Form';
import { useGetContactsQuery, useAddContactMutation } from 'redux/contactsApi';
import Notiflix from 'notiflix';

export const Phonebook = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data: contacts } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const handleChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'number':
        setNumber(e.currentTarget.value);
        break;
      default:
        return;
    }
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
  const formSubmitHandle = async data => {
    if (contacts.filter(contact => contact.name === data.name).length > 0) {
      Notiflix.Notify.warning(`${data.name} is already in contacts`);
      return;
    }

    try {
      await addContact(data);
      Notiflix.Notify.success('Contact added');
    } catch (error) {
      Notiflix.Notify.failure('Something wrong... try again');
    }
  };
  const clickOnBtnSubmit = e => {
    e.preventDefault();
    formSubmitHandle({ name, number });
    reset();
  };

  return (
    <>
      <FormPhonebook onSubmit={clickOnBtnSubmit}>
        <LabelPhoneBook title="Name">
          <InputName value={name} onChange={handleChange} />
        </LabelPhoneBook>
        <LabelPhoneBook title="Number">
          <InputNumber value={number} onChange={handleChange} />
        </LabelPhoneBook>
        <ButtonSubmit text="Add contact" />
      </FormPhonebook>
    </>
  );
};
