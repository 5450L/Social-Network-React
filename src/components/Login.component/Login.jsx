import {Field, reduxForm} from "redux-form";
import {Input} from "../shared/FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/reducers/auth-reducer";
import {Navigate} from "react-router-dom";
import formStyle from "../shared/FormControls/FormControls.module.css"

const maxLength30 = maxLengthCreator(30);

const LoginForm = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name={'email'} placeholder={`Email`} component={Input} validate={[required, maxLength30]}/>
        </div>

        <div>
            <Field name={'password'} placeholder={`Password`} type={'password'} component={Input}
                   validate={[required, maxLength30]}/>
        </div>

        <div>
            <Field name={'rememberMe'} type={'checkbox'} component={Input}/> remember me
        </div>

        {props.error && <div className={formStyle.formSummaryError}>
            {props.error}
        </div>}

        <div>
            <button>Log in</button>
        </div>
    </form>
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
        props.login(formData.email, formData.password, formData.rememberMe);
    }


    if (props.isAuth) {
        return <Navigate to={'/profile'}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);