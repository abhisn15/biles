import React, { useState } from 'react';
import { IconButton, InputAdornment, FormHelperText, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const PasswordSama = () => {
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [passwordRepeatError, setPasswordRepeatError] = useState(false);

    const handlePasswordChange = (event) => {
        const inputPassword = event.target.value;
        setPassword(inputPassword);

        if (inputPassword.length < 8) {
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleClickShowPassword2 = () => {
        setShowPasswordRepeat(!showPasswordRepeat);
    };

    const handleMouseDownPassword2 = (event) => {
        event.preventDefault();
    };

    const handlePasswordRepeatChange = (event) => {
        const inputPasswordRepeat = event.target.value;
        setPasswordRepeat(inputPasswordRepeat);

        if (inputPasswordRepeat !== password) {
            setPasswordRepeatError(true);
        } else {
            setPasswordRepeatError(false);
        }
    }

    return (
        <form>
            <div className='mt-5'>
                <span className='text-gray-500'>Kata Sandi</span>
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
                <FormHelperText sx={{ marginLeft: '2px', color: 'red' }} error={passwordError}>
                    {passwordError ? 'Password harus memiliki minimal 8 karakter' : ''}
                </FormHelperText>
            </div>

            <div className='mt-5'>
                <span className='text-gray-500'>Ulang Kata Sandi</span>
                <TextField
                    className='relative right-2 drop-shadow-md'
                    type={showPasswordRepeat ? 'text' : 'password'}
                    id="password-repeat-input"
                    name="password-repeat"
                    value={passwordRepeat}
                    onChange={handlePasswordRepeatChange}
                    error={passwordRepeatError}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position='end'>
                                <IconButton
                                    aria-label='toggle password visibility'
                                    onClick={handleClickShowPassword2}
                                    onMouseDown={handleMouseDownPassword2}
                                    edge='end'
                                >
                                    {showPasswordRepeat ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <FormHelperText sx={{ marginLeft: '2px', color: 'red' }} error={passwordRepeatError}>
                    {passwordRepeatError ? 'Password tidak sama' : ''}
                </FormHelperText>
            </div>
        </form>
    );
}

export default PasswordSama;
