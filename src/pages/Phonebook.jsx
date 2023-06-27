import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { getFilter, getPhonebook } from "redux/selectors";
import { deleteContacts, getContacts } from "redux/operators";
import { searchContacts } from "redux/slice";
import searchFunction from "utils/filter";

import Form from "components/Form";

import { TextField, IconButton, Card, List, ListItem } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

import Container from '@mui/material/Container';

const Phonebook = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getPhonebook)
    const search = useSelector(getFilter);
    
    useEffect(() => {
        dispatch(getContacts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const onDelete = (id) => {
        dispatch(deleteContacts(id)).then(() => {
            dispatch(getContacts());
        });
    };
    const searchedContacts = searchFunction(contacts, search);
    
    return (
        <section>
            <Container maxWidth='xs'>
                <h1>Phone Book</h1>
            <Form />
            <Card>
                <label htmlFor="search"></label> 
                <TextField
                    type="text"
                    name='search'
                    onChange={ e => dispatch(searchContacts(e.target.value))}
                    helperText="Search contacts by name or number"
                    id="search"
                    label="Search"
                    aria-describedby="my-helper-text"
                    variant="standard"
                />
                <h3>Contacts</h3>
                <List>
                    {contacts.length > 0 ?
                        searchedContacts.map(contact => (
                            <ListItem key={contact.id}>
                                <p>{contact.name}</p>
                                <p>{contact.phone}</p>
                                <IconButton
                                    onClick={() => onDelete(contact.id)}
                                    aria-label="delete"
                                    size="small">
                                    <DeleteIcon fontSize="small" />
                                </IconButton>
                            </ListItem>
                        )) :<p>There are not any contacts saved yet.</p>
                    }
                </List>
            </Card>
            </Container>
        </section>
       )
};

export default Phonebook;

