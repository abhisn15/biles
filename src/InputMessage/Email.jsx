import React, { useState } from 'react';
import { TextField, FormHelperText } from '@mui/material';

function Email() {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function handleEmailChange(event) {
        const inputEmail = event.target.value;
        setEmail(inputEmail);

        if (!validateEmail(inputEmail)) {
            // Tampilkan pesan error jika input email tidak valid
            setEmailError(true);
        } else {
            setEmailError(false);
        }
    }

    return (
        <div>
            <TextField
                className='relative right-2 drop-shadow-md'
                type="email"
                id="email-input"
                name="email"
                value={email}
                onChange={handleEmailChange}
                error={emailError}
            />
            <FormHelperText sx={{ marginLeft: '2px', color: 'red' }} error={emailError}>
                Email tidak valid
            </FormHelperText>
        </div>
    );
}

export default Email;