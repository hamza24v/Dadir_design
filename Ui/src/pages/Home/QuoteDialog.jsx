import React from 'react';
import { Dialog, DialogContent, DialogTitle, TextField, Checkbox, FormControlLabel, Button } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  const initialValues = {
    fullName: '',
    phoneNumber: '',
    email: '',
    address: '',
    dateOfService: '',
    services: [],
    message: '',
  };

  const handleSubmit = async (values, {  setSubmitting, resetForm }) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)
      })
      
      if(response.ok){
        toast.success('Booking created successfully')
        resetForm();
        handleClose()
      } else {
        toast.error("Error creating booking")
      }
    } catch (err) {
      console.error("Error submitting form", err)
      toast.error('An error occurred. Please try again.');
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <ToastContainer />
      <Dialog className='w-200' open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle className='flex justify-center bg-blue-200' id="form-dialog-title">
          <h2 className='text-3xl'>Book an appointment</h2>
        </DialogTitle>
        <DialogContent>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
            className='mt-20'
          >
            {({ handleChange, errors, touched }) => (
              <Form className='flex flex-col'>
                <div className='py-4 flex flex-row space-x-5'>
                  <Field as={TextField} className='mr-3 flex-1' label="Full name" name="fullName" error={touched.fullName && !!errors.fullName} helperText={touched.fullName && errors.fullName} />
                  <Field as={TextField} className='flex-1' label="Phone number" name="phoneNumber" error={touched.phoneNumber && !!errors.phoneNumber} helperText={touched.phoneNumber && errors.phoneNumber} />
                </div>
                <div className='pb-5 flex flex-row space-x-5'>
                  <Field as={TextField} className='mr-3 flex-1' label="Email" name="email" error={touched.email && !!errors.email} helperText={touched.email && errors.email} />
                  <Field as={TextField} className='flex-1' label="Address" name="address" error={touched.address && !!errors.address} helperText={touched.address && errors.address} />
                </div>
                <Field className='ml-5 max-w-60' as={TextField} label="Preferred date of service" name="dateOfService" type="date" InputLabelProps={{ shrink: true }} error={touched.dateOfService && !!errors.dateOfService} helperText={touched.dateOfService && errors.dateOfService} />
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
                <Field as={TextField} label="How can we help?" name="message" multiline rows={4}  error={touched.message && !!errors.message} helperText={touched.message && errors.message}/>
                <br />
                <Button type="submit" color="salmon" variant="contained">
                  Book
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
