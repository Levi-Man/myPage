import React, { useState } from 'react';
import './style/ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        Message: '',
    });

    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        Message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setFormErrors({
            ...formErrors,
            [name]: '',
        });
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        if (value.trim() === '') {
            setFormErrors({
                ...formErrors,
                [name]: 'This field is required',
            });
        } else if (name === 'email' && !validateEmail(value)) {
            setFormErrors({
                ...formErrors,
                [name]: 'Invalid email address',
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                />
                <div className="error-message">{formErrors.name}</div>
            </div>

            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                />
                <div className="error-message">{formErrors.email}</div>
            </div>

            <div className="form-group">
                <label htmlFor="message">Message:</label>
                <br></br>
                <textarea
                    type="text"
                    className="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                />
                <div className="error-message">{formErrors.message}</div>
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;
