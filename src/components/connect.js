import React, { useState } from 'react';
import './connect.css';

export default function Connect() {
    // State to manage form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // State to manage submission status
    const [submissionStatus, setSubmissionStatus] = useState('');

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://13.200.180.233:3000/portfolio_be/api/v1/db/db_controller', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                // Set success status, clear form, and show success alert
                setSubmissionStatus('success');
                setFormData({ name: '', email: '', message: '' });
                window.alert('Your message has been sent successfully!');
            } else {
                // Set failure status and show error alert
                setSubmissionStatus('error');
                window.alert('There was an error sending your message. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            // Set error status and show error alert
            setSubmissionStatus('error');
            window.alert('There was an error sending your message. Please try again.');
        }
    };

    return (
        <>
            {/* <h1 className='headings'>Let's connect</h1> */}
            <form className='form' onSubmit={handleSubmit}>
                <div className='formInput'>
                    <h2>Name:</h2>
                    <input
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <br />
                <div className='formInput'>
                    <h2>Email:</h2>
                    <input
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <br />
                <div className='formInput'>
                    <h2>Message:</h2>
                    <input
                        name='message'
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <br /><br />
                <button type='submit'>Submit</button>
            </form>

            {/* Show success or error messages based on submission status */}
            {submissionStatus === 'success' && (
                <p className='successMessage'>Your message has been sent successfully!</p>
            )}
            {submissionStatus === 'error' && (
                <p className='errorMessage'>There was an error sending your message. Please try again.</p>
            )}
        </>
    );
}
