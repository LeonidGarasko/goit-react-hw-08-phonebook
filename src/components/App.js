import { Phonebook } from './Phonebook/Phonebook';
import { useSelector } from 'react-redux';
import { Main } from './Main/Main';
import { Contacts } from './Phonebook/Contacts/Contacts';

export const App = () => {
  const contacts = useSelector(state => state.contacts.items);

  return (
    <Main title="Phonebook">
      <Phonebook />
      {contacts.length > 0 ? (
        <Contacts name="Contacts" />
      ) : (
        <p>Phonebook empty</p>
      )}
    </Main>
  );
};
