import React, { useState } from 'react';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Password = () => {
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordChange = (event) => {
        const inputPassword = event.target.value;
        setPassword(inputPassword);

        if (inputPassword.length < 8) {
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <form>
            <div>
                <TextField
                    className='relative right-2 drop-shadow-md'
                    type={showPassword ? 'text' : 'password'}
                    id='password-input'
                    name='password'
                    value={password}
                    onChange={handlePasswordChange}
                    error={passwordError}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position='end'>
                                <IconButton
                                    aria-label='toggle password visibility'
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge='end'
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </div>
        </form>
    );
};

export default Password;
