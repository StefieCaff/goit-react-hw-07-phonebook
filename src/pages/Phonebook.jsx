import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { getFilter, getPhonebook } from "redux/selectors";
import { deleteContacts, getContacts } from "redux/operators";
import { searchContacts } from "redux/slice";
import searchFunction from "utils/filter";

import Form from "components/Form";

import { TextField, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

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
        <div>
            <Form />
            <label htmlFor="search"></label> 
            <TextField
                type="text"
                name='search'
                onChange={ e => dispatch(searchContacts(e.target.value))}
                helperText="Search contacts by name or number"
                id="search"
                label="search"
                aria-describedby="my-helper-text"
                variant="filled"
            />
            <h3>Contacts</h3>
            <ul>
                {contacts.length > 0 &&
                    searchedContacts.map(contact => (
                        <li key={contact.id}>
                            <p>{contact.name}</p>
                            <p>{contact.phone}</p>
                            <IconButton
                                onClick={() => onDelete(contact.id)}
                                aria-label="delete"
                                size="small">
                                <DeleteIcon fontSize="small" />
                            </IconButton>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
};

export default Phonebook;

