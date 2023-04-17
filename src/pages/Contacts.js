import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Contactlist } from 'components/ContactList/ContactList';
import { fetchContacts } from 'components/redux/contacts/operations';
import { selectIsLoading } from 'components/redux/contacts/selectors';
import { FilterContacts } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { selectError } from 'components/redux/contacts/selectors';
import { Hero } from './Contacts.styled';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main>
      <Hero>Your Contacts</Hero>
      <ContactForm />
      <title>Your tasks</title>
      <FilterContacts />
      <Contactlist />
      {isLoading && !error && <b>Request in progress...</b>}
    </main>
  );
}
