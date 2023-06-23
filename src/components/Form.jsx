import { TextField, Fab } from "@mui/material";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
const Form = () => {

    return (
        <form>
            <label htmlFor="name"></label> 
            <TextField
                type="text"
                name='name'
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
                pattern="[0-9\s+\-]{6,19}"
                title="Phone number must be at least 6 digits max 19 digits. In this case digits include single spaces between numbers, dashes, parentheses and number can start with +"
                required
                helperText="Please enter your number "
                id="number"
                label="Number"
                aria-describedby="my-helper-text"
                variant="filled"
            />
             <Fab color="secondary" aria-label="add-contact">
                <PersonAddAlt1Icon/>
            </Fab>
            
        </form>
    )
};

export default Form;