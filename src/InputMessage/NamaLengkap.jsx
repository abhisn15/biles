import React, { useState } from 'react';
import { TextField, FormHelperText } from '@mui/material';

const NamaLengkap = () => {
    const [fullName, setFullName] = useState('');
    const [fullNameError, setFullNameError] = useState(false);

    const handleFullNameChange = (event) => {
        const inputFullName = event.target.value;
        setFullName(inputFullName);

        if (inputFullName.trim() === '') {
            setFullNameError(true);
        } else {
            setFullNameError(false);
        }
    }

    const handleFullNameFocus = () => {
        if (fullName.trim() === '') {
            setFullNameError(true);
        }
    }

    const handleFullNameBlur = () => {
        setFullNameError(false);
    }

    return (
        <form>
            <div>
                <TextField
                    className='relative right-2 drop-shadow-md'
                    type="text"
                    id="full-name-input"
                    name="full-name"
                    value={fullName}
                    onChange={handleFullNameChange}
                    onFocus={handleFullNameFocus}
                    onBlur={handleFullNameBlur}
                    error={fullNameError}
                />
                <FormHelperText error={fullNameError}>
                    {fullNameError ? 'Nama lengkap tidak boleh kosong' : ''}
                </FormHelperText>
            </div>
        </form>
    );
}

export default NamaLengkap;
