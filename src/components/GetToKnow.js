import React, { useEffect, useState } from 'react';
import { Button, TextField, Container, Typography, Grid } from '@mui/material';
import { ButtonChaseMe, DatePickerAdd, DatePickerInputRandom, DatePickerRandom, LaggyInput, ReverseTextInput } from 'react-intuitive-components';

const GetToKnow = ({onSubmit}) => {
    // Form state to hold user input
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        birthDate: '',
        currentDate: '',
        importantDate: '',
    });

    // Handle form input changes
    const handleInputChange = (target) => {
        const { name, value } = target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
        console.log('Form Data:', formData);
    };

    return (
        <div className="p-8 min-h-screen w-full bg-gray-100 flex items-center justify-center">
            <Container maxWidth="sm" className="bg-white p-8 rounded-lg shadow-lg">
                <Typography variant="h4" component="h1" className="font-bold text-center mb-[25px]"
                    sx={{ marginBottom: '25px' }}>
                    Get to Know You
                </Typography>

                {/* Form Section */}
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <ReverseTextInput value={formData.name}
                                onChange={(newValue) => { handleInputChange({ name: "name", value: newValue }) }} customInput={<TextField
                                    label="Name"
                                    name="name"
                                    fullWidth
                                    variant="outlined"
                                    required
                                />}></ReverseTextInput>
                        </Grid>
                        <Grid item xs={6}>
                            <LaggyInput onChange={(newValue) => { handleInputChange({ name: "email", value: newValue }) }} value={formData.email} customInput={<TextField
                                label="Email"
                                name="email"
                                fullWidth
                                variant="outlined"
                                required
                            />}>

                            </LaggyInput>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Date of Birth"
                                name="birthDate"
                                type="date"
                                value={formData.birthDate}
                                onChange={handleInputChange}
                                fullWidth
                                variant="outlined"
                                className="mb-4"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                required
                                disabled
                            />
                            <DatePickerRandom dateFormat={'normal'} onSubmit={(newDate) => {
                                const year = newDate.getFullYear();
                                const month = String(newDate.getMonth() + 1).padStart(2, '0'); // Months are 0-based
                                const day = String(newDate.getDate()).padStart(2, '0');

                                const formattedDate = `${year}-${month}-${day}`;
                                handleInputChange({ name: 'birthDate', value: formattedDate })
                            }} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Current Date"
                                name="currentDate"
                                type="date"
                                value={formData.currentDate}
                                onChange={handleInputChange}
                                fullWidth
                                variant="outlined"
                                className="mb-4"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                required
                                disabled
                            />
                            <DatePickerAdd onSubmit={(newDate) => {
                                const year = newDate.getFullYear();
                                const month = String(newDate.getMonth() + 1).padStart(2, '0'); // Months are 0-based
                                const day = String(newDate.getDate()).padStart(2, '0');

                                const formattedDate = `${year}-${month}-${day}`;
                                handleInputChange({ name: 'currentDate', value: formattedDate })
                            }} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Date of Most Important Day in Your Life"
                                name="importantDate"
                                type="date"
                                value={formData.importantDate}
                                onChange={handleInputChange}
                                fullWidth
                                variant="outlined"
                                className="mb-4"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                required
                                disabled
                            />
                            <DatePickerInputRandom onSubmit={(newDate) => {
                                const year = newDate.getFullYear();
                                const month = String(newDate.getMonth() + 1).padStart(2, '0'); // Months are 0-based
                                const day = String(newDate.getDate()).padStart(2, '0');

                                const formattedDate = `${year}-${month}-${day}`;
                                handleInputChange({ name: 'importantDate', value: formattedDate })
                            }} />
                        </Grid>

                        <Grid item xs={12}>
                            <ButtonChaseMe customButton={<Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                fullWidth
                                className="mt-4"
                                style={{
                                    backgroundColor: '#3f51b5', // custom primary color
                                    padding: '14px', // add padding for a larger button
                                    fontWeight: 'bold', // make button text bold
                                    letterSpacing: '1px', // spacing between letters
                                }}
                            >
                                Submit
                            </Button>}>

                            </ButtonChaseMe>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </div>
    );
};

export default GetToKnow;
