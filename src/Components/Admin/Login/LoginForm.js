// CSS
import formClasses from 'Components/UI/Form/Form.module.css'
import buttonClasses from 'Components/UI/Button/Button.module.css'
// UI
import Card from 'Components/UI/Card/Card'
import Form from 'Components/UI/Form/Form'
import Button from 'Components/UI/Button/Button'

const LoginForm = ({
  submitHandler,
  emailState,
  passwordState,
  changeHandler,
  validateFieldHandler,
  formIsValid,
}) => {
  return (
    <Card title='Login'>
      <Form onSubmit={submitHandler}>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            id='email'
            name='email'
            className={emailState.isValid === false ? formClasses.invalid : ''}
            value={emailState.value}
            onChange={changeHandler}
            onBlur={validateFieldHandler}
            autoComplete='email'
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            className={
              passwordState.isValid === false ? formClasses.invalid : ''
            }
            value={passwordState.value}
            onChange={changeHandler}
            onBlur={validateFieldHandler}
            autoComplete='password'
          />
        </div>
        <div className={formClasses.buttons}>
          <Button
            type='submit'
            className={buttonClasses.big}
            disabled={!formIsValid}
          >
            Login
          </Button>
        </div>
      </Form>
    </Card>
  )
}

export default LoginForm
