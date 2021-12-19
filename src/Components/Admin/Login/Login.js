// Packages
import React from 'react'
// Context
import AuthContext from 'Context/auth-context'
// Utils
import config from 'Utils/Config/default'
// Components
import LoginForm from './LoginForm'

// How to validate an email address
const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// What the initial email state should be
const initialEmail = {
  value: config.email,
  isValid: config.email.match(EMAIL_REGEX) ? true : null,
}

// What the initial password state should be
const initialPassword = {
  value: config.password,
  isValid: config.password.trim().length > 0 ? true : null,
}

// Set action types to reduce errors
const actionTypes = {
  input: 'USER INPUT',
  blur: 'INPUT BLUR',
}

// Updating email info
const emailReducer = (state, action) => {
  if (action.type === actionTypes.input) {
    const isValid = action.val.match(EMAIL_REGEX) ? true : false
    return { value: action.val, isValid }
  }
  if (action.type === actionTypes.blur) {
    const isValid = state.value.match(EMAIL_REGEX) ? true : false
    return { value: state.value, isValid }
  }
  return { ...initialEmail }
}

// Updating password info
const passwordReducer = (state, action) => {
  if (action.type === actionTypes.input) {
    return { value: action.val, isValid: action.val.trim().length > 0 }
  }
  if (action.type === actionTypes.blur) {
    return { value: state.value, isValid: state.value.trim().length > 0 }
  }
  return { ...initialPassword }
}

const Login = () => {
  const auth = React.useContext(AuthContext)
  // Whether or not form is valid
  const [formIsValid, setFormIsValid] = React.useState(false)
  // Set up email info and dispatch
  const [emailState, dispatchEmail] = React.useReducer(emailReducer, {
    ...initialEmail,
  })
  // Set up password info and dispatch
  const [passwordState, dispatchPassword] = React.useReducer(passwordReducer, {
    ...initialPassword,
  })

  // Check if the whole form is valid when the email and password states change,
  // after user pauses for a bit. Earlier versions of this made more sense - it
  // would check the validity when user paused typing, but now that it only
  // checks when the validity changes, the pause doesn't make much sense
  // anymore. Leaving it anyway as an example.
  React.useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(emailState.isValid && passwordState.isValid)
    }, 500)

    // Clear the timeout before the next time it is run to keep only one going
    // at a time
    return () => {
      clearTimeout(identifier)
    }
    // Only run if the validity of either field has changed
  }, [emailState.isValid, passwordState.isValid])

  // Save field change
  const changeHandler = (e) => {
    const field = e.target.name
    const dispatchObj = { type: actionTypes.input, val: e.target.value }

    if (field === 'email') dispatchEmail(dispatchObj)
    if (field === 'password') dispatchPassword(dispatchObj)
  }

  // Check if field is valid when focus is removed
  const validateFieldHandler = (e) => {
    const field = e.target.name
    const dispatchObj = { type: actionTypes.blur }

    if (field === 'email') dispatchEmail(dispatchObj)
    if (field === 'password') dispatchPassword(dispatchObj)
  }

  // Submit form
  const submitHandler = (e) => {
    e.preventDefault()
    auth.onLogin(emailState.value)
  }

  return (
    <LoginForm
      submitHandler={submitHandler}
      emailState={emailState}
      passwordState={passwordState}
      changeHandler={changeHandler}
      validateFieldHandler={validateFieldHandler}
      formIsValid={formIsValid}
    />
  )
}

export default Login
