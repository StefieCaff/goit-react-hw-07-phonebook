import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { Notify } from 'notiflix';

import { getContacts, postContacts } from 'redux/operators';
import { getPhonebook } from 'redux/selectors';
import { TextField, Fab } from "@mui/material";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        number: '',
    });
    const dispatch = useDispatch();
    const contacts = useSelector(getPhonebook);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name === '' || formData.number === '') {
            return
        }
        const existingName = contacts.some(
            contact => contact.name === formData.name
        );
        const existingNumber = contacts.some(
            contact => contact.phone === formData.number
        );
        if (existingName) {
            Notify.warning(`${formData.name} is already in your contact list`);
            return;
        } else if (existingNumber) {
            Notify.warning(`${formData.number} is already in your contact list`);
            return;
        }
        dispatch(postContacts(formData)).then(() => {
            dispatch(getContacts());
        });
    };

    return (

        <form onSubmit={handleSubmit}>
            <label htmlFor="name"></label> 
            <TextField
                type="text"
                name='name'
                value={formData.name}
                onChange={e => 
                    setFormData(prev => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                    }))
                }
                pattern="[A-Za-z\- ]{1,30}"
                title="Name must contain minimum 1, maximum 30 characters. In this case characters include Upper and lowercase letters, apostrophe with following letter, and a max of two spaces between characters. For example: Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                helperText="Please enter your name"
                id="name"
                label="Name"
                aria-describedby="my-helper-text"
                variant="filled"
                />
            <label htmlFor='number'></label>
            <TextField
                type="tel"
                name='number'
                value={formData.number}
                onChange={e => 
                    setFormData(prev => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                    }))
                }
                pattern="[0-9\s+\-]{6,19}"
                title="Phone number must be at least 6 digits max 19 digits. In this case digits include single spaces between numbers, dashes, parentheses and number can start with +"
                required
                helperText="Please enter your number "
                id="number"
                label="Number"
                aria-describedby="my-helper-text"
                variant="filled"
            />
             <Fab color="secondary" aria-label="add-contact" type='submit'>
                <PersonAddAlt1Icon/>
            </Fab>
            
        </form>
    )
};

export default Form;