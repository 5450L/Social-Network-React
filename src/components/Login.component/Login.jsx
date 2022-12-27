import {Field, reduxForm} from "redux-form";
import {Input} from "../shared/FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength10 = maxLengthCreator(10);

const LoginForm = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name={'Login'} placeholder={`Login`} component={Input} validate={[required, maxLength10]}/>
        </div>

        <div>
            <Field name={'Password'} placeholder={`Password`} component={Input}
                   validate={[required, maxLength10]}/>
        </div>

        <div>
            <Field name={'rememberMe'} type={'checkbox'} component={Input}/> remember me
        </div>

        <div>
            <button>Log in</button>
        </div>
    </form>
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login;