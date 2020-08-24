import * as yup from 'yup'

const FormSchema = yup.object().shape({
    name: yup
        .string()
        .min(2, "Username must be at least 2 characters")
        .required("Username is Required")
})

export default FormSchema