import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, TextField, Checkbox, FormControlLabel, Button } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

// Define a validation schema for Formik
const validationSchema = Yup.object({
  fullName: Yup.string().required('Required'),
  phoneNumber: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  address: Yup.string().required('Required'),
  dateOfService: Yup.date().required('Required'),
  services: Yup.array().min(1, 'At least one service must be selected'),
  message: Yup.string().required('Required'),
});

function QuoteDialog({ handleClose, open }) {
    
  // Initial values for Formik
  const initialValues = {
    fullName: '',
    phoneNumber: '',
    email: '',
    address: '',
    dateOfService: '',
    services: [],
    message: '',
  };

  const handleSubmit = (values) => {
    console.log("submitted values: ", values)
    setSubmitting(false);
    handleClose();
  }

  return (
    <>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle className='flex justify-center bg-orange-200' id="form-dialog-title">
          <h2 className='text-3xl'>Send a text</h2>
        </DialogTitle>
        <DialogContent>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            className='mt-20'
          >
            {({ values, handleChange, handleBlur, errors, touched, setFieldValue }) => (
              <Form>
                <Field as={TextField} label="Full name" name="fullName" error={touched.fullName && !!errors.fullName} helperText={touched.fullName && errors.fullName} />
                <br />
                <Field as={TextField} label="Phone number" name="phoneNumber" error={touched.phoneNumber && !!errors.phoneNumber} helperText={touched.phoneNumber && errors.phoneNumber} />
                <br />
                <Field as={TextField} label="Email" name="email" error={touched.email && !!errors.email} helperText={touched.email && errors.email} />
                <br />
                <Field as={TextField} label="Address" name="address" error={touched.address && !!errors.address} helperText={touched.address && errors.address} />
                <br />
                <Field as={TextField} label="Preferred date of service" name="dateOfService" type="date" InputLabelProps={{ shrink: true }} error={touched.dateOfService && !!errors.dateOfService} helperText={touched.dateOfService && errors.dateOfService} />
                <br />
                <div>Services</div>
                <FormControlLabel
                  control={<Field as={Checkbox} name="services" value="Furniture Assembly" onChange={handleChange} />}
                  label="Furniture Assembly"
                />
                <FormControlLabel
                  control={<Field as={Checkbox} name="services" value="Furniture Delivery" onChange={handleChange} />}
                  label="Furniture Delivery"
                />
                <FormControlLabel
                  control={<Field as={Checkbox} name="services" value="Outdoor Furniture Assembly" onChange={handleChange} />}
                  label="Outdoor Furniture Assembly"
                />
                <FormControlLabel
                  control={<Field as={Checkbox} name="services" value="Other" onChange={handleChange} />}
                  label="Other"
                />
                <br />
                <Field as={TextField} label="How can we help?" name="message" multiline rows={4} error={touched.message && !!errors.message} helperText={touched.message && errors.message} />
                <br />
                <Button type="submit" color="primary" variant="contained">
                  Send
                </Button>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default QuoteDialog;
