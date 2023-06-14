import React, { useState } from 'react';
import SignUp from './SignUp';
import SignUp1 from './SignUp1';
import SignUp2 from './SignUp2';

const Contact = () => {
    const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    tel: '',
    cin: '',
    nPermis: '',
    licenceTaxi: '',
    immatr: '',
    numTaxi: '',
    constructeur: '',
    model: '',
    annee: ''
  });
  const [currentPage, setCurrentPage] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the complete form data to the Express.js API
    // Use Axios or Fetch to make the POST request and send the complete formData
    // ...
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };
  const renderFormPage = () => {
    switch (currentPage) {
      case 1:
        return <SignUp formData={formData} handleChange={handleChange}   onNext={handleNext} />;
      case 2:
        return <SignUp1 formData={formData} handleChange={handleChange} onPrev={handlePrev} onNext={handleNext} />;
      case 3:
        return <SignUp2 formData={formData} handleChange={handleChange} onSubmit={handleSubmit} />;
      default:
        return null;
    }
  };

  return <div>{renderFormPage()}</div>;
};

export default Contact;
