// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CircularProgress, InputAdornment, TextField } from "@material-ui/core"
import { Form, Formik } from "formik"
import { navigate } from "gatsby"
import React from "react"
import styled from "styled-components"
import * as Yup from "yup"
import { ErrorMessage } from "./errormessage"

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

const StyledTextField = styled(TextField)`
  .MuiInput-underline:before {
    border-bottom: 2px solid #fff;
  }
  /* hover (double-ampersand needed for specificity reasons. */
  && .MuiInput-underline:hover:before {
    border-bottom: 2px solid lightblue;
  }
  /* focused */
  .MuiInput-underline:after {
    border-bottom: 2px solid #f00;
  }
  .MuiInputBase-input {
    color: #fff;
  }
`
const SubmitButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => (props.values ? "red" : null)};
  &:hover {
    cursor: pointer;
  }
`
const FormikForm = styled(Form)`
  @media (min-width: 600px) {
    width: 18em;
  }
`
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

const SearchFormValidationSchema = Yup.object().shape({
  search: Yup.string()
    .min(2, "Please provide a longer search term")
    .max(85, "The value you have provided is too long")
    .required("Please provide a search term"),
})

export const SearchForm = () => {
  return (
    <Formik
      initialValues={{ search: "" }}
      validationSchema={SearchFormValidationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false)
        // If values are entered into the form, then push the user to the results page
        /* 
          The values entered into this form are then passed through to the './image-results.js' page through state 
          to be accepted into the SEARCH_IMAGES_BY_KEYWORD ApolloGraphQL Query 
        */
        if (values.search !== "") {
          navigate("/image-results", {
            state: values,
          })
        }
        return
      }}
    >
      {({
        isSubmitting,
        values,
        handleChange,
        errors,
        touched,
        setFieldValue,
      }) => (
        <FormikForm>
          <StyledTextField
            id="main-nav"
            placeholder="Search for images"
            name="search"
            value={values.search}
            onChange={handleChange}
            label={<span style={{ color: "transparent" }}>Search for images</span>}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SubmitButton type="submit" disabled={isSubmitting} aria-label="Submit search">
                    {isSubmitting ? (
                      <CircularProgress
                        style={{ color: "#fff" }}
                        size="1.5em"
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faSearch}
                        style={{ color: "#fff" }}
                      />
                    )}
                  </SubmitButton>
                </InputAdornment>
              ),
              endAdornment:
                /* Button to let the user clear the current text values of the search form */
                values.search ? (
                  <SubmitButton
                    type="reset"
                    values={values.search}
                    onClick={() => setFieldValue("search", "")}
                    aria-label="Reset search query"
                  >
                    x
                  </SubmitButton>
                ) : null,
            }}
          />
          {errors.search && touched.search ? (
            <ErrorMessage errors={errors} />
          ) : null}
        </FormikForm>
      )}
    </Formik>
  )
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
