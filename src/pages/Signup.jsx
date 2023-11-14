import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import StepOne from "../components/StepOne";
import StepTwo from "../components/StepTwo";
import StepThree from "../components/StepThree";
import StepFour from "../components/StepFour";
import BluePoster from "../components/BluePoster";

function SignUpForm() {
  const [step, setStep] = useState(1);

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    country: Yup.string().required("Country is required"),
    city: Yup.string().required("City is required"),
    zipcode: Yup.string().required("Zipcode is required"),
    id: Yup.string().required("ID is required"),
    mobileNumber: Yup.string().required("Mobile number is required"),
    personalMail: Yup.string().required("Personal mail is required"),
    personalWebsite: Yup.string().required("Personal website link is required"),
    linkedIn: Yup.string().required("LinkedIn profile is required"),
    schoolName: Yup.string().required("School Name is required"),
    schoolAddress: Yup.string().required("Provide school address"),
    schoolCountry: Yup.string().required("Provide school country details"),
    schoolCity: Yup.string().required("Specify school city"),
    schoolZipCode: Yup.string().required("Specify school zip code"),
  });

  const initialValues = {
    fullName: "",
    email: "",
    password: "",
    country: "",
    city: "",
    zipcode: "",
    id: "",
    mobileNumber: "",
    personalMail: "",
    personalWebsite: "",
    linkedIn: "",
    schoolName: "",
    schoolAddress: "",
    schoolCountry: "",
    schoolCity: "",
    schoolZipCode: "",
    organizationID: "",
    organizationPhone: "",
    organizationMail: "",
    organizationWebsite: "",
    primaryColor: "",
    secondaryColor: "",
    schoolLogo: "",
    schoolType: "",
    schoolPurpose: [],
    teammatesEmail: [],
  };

  const handleChange = (fieldName, value) => {
    // Create a copy of the current form values
    const newFormValues = { ...formik.values };

    // Update the specific field with the new value
    newFormValues[fieldName] = value;

    // Update the form values using Formik's setValues function
    formik.setValues(newFormValues);
  };

  const handleSubmit = (values) => {
    // Handle form submission here, e.g., send data to the server
    console.log("Submitted data:", values);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };



  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formikProps) => (
          <Form>
            {step === 1 && (
              <StepOne
                // formValue={initialValues}
                formikProps={formikProps}
                error={formikProps.errors}
                step={setStep}
                handleChange={handleChange}
              />
            )}
            {step === 2 && (
              <StepTwo
                formikProps={formikProps}
                error={formikProps.errors}
                step={setStep}
                nextStep={nextStep}
                prevStep={prevStep}
                handleChange={handleChange}
              />
            )}
            {step === 3 && (
              <StepThree
                formikProps={formikProps}
                error={formikProps.errors}
                step={setStep}
                nextStep={nextStep}
                prevStep={prevStep}
                handleChange={handleChange}
              />
            )}
            {step === 4 && (
              <StepFour
                formikProps={formikProps}
                error={formikProps.errors}
                step={setStep}
                prevStep={prevStep}
                handleChange={handleChange}
              />
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SignUpForm;
