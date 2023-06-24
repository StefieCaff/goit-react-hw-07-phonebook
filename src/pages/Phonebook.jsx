import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { getPhonebook } from "redux/selectors";
import { getContacts } from "redux/operators";
import { TextField, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

import Form from "components/Form";

const Phonebook = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getPhonebook)
    console.log(contacts);
    
    useEffect(() => {
        dispatch(getContacts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <div>
            <Form />
            <label htmlFor="search"></label> 
            <TextField
                type="text"
                name='search'
                onChange={ e => {}}
                helperText="Please enter contact name to search"
                id="search"
                label="search"
                aria-describedby="my-helper-text"
                variant="filled"
            />
            <h3>Contacts</h3>
            <ul>
                {contacts.length > 0 &&
                    contacts.map(contact => (   
                <li key={contact.id}>
                    <p>{contact.name}</p>
                    <p>{contact.phone}</p>
                    <IconButton aria-label="delete" size="small">
                        <DeleteIcon fontSize="small" />
                    </IconButton>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default Phonebook;

