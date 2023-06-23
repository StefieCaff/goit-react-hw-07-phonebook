import { TextField, IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

import Form from "components/Form";

const Phonebook = () => {

    return (
        <div>
            <Form />
            <label htmlFor="search"></label> 
            <TextField
                type="text"
                name='search'
                helperText="Please enter contact name to search"
                id="search"
                label="search"
                aria-describedby="my-helper-text"
                variant="filled"
            />
            <h3>Contacts</h3>
            <ul>
                <li>
                    contact name
                    <IconButton aria-label="delete" size="small">
                        <DeleteIcon fontSize="small" />
                    </IconButton>
                </li>
            </ul>
        </div>
    )
};

export default Phonebook;

