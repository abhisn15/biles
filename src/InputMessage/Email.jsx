import React, { useState } from 'react';
import { TextField, FormHelperText } from '@mui/material';

const Email = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    const handleEmailChange = (event) => {
        const inputEmail = event.target.value;
        setEmail(inputEmail);

        if (!validateEmail(inputEmail)) {
            // Tampilkan pesan error jika input email tidak valid
            setEmailError(true);
        } else if (inputEmail.includes('@')) {
            // Sembunyikan pesan error jika input email valid dan mengandung karakter @
            setEmailError(false);
        }
    }

    return (
        <form>
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
                    {emailError ? 'Email tidak valid' : ''}
                </FormHelperText>
            </div>
        </form>
    );
}

export default Email;