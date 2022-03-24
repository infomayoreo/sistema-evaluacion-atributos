import { useDispatch } from 'react-redux';
import { useForm } from "../../../hooks";
import { startLoginEmailPassword } from "../../../redux/actions";
import {startLoginGoogle}  from "../../../redux/actions";
import GoogleLogin from 'react-google-login';
import { GoogleLoginButton } from '../GoogleLoginButton';

export const LoginPage = ({ title }: any): JSX.Element => {

	
	const dispatch = useDispatch();
	
	const handleGoogleLogin = (response: any) => {
		dispatch(startLoginGoogle(response));
	}
    const [ formValues, handleInputChange ] = useForm({
        email: '',
        password: '',
    });

	const { email, password } = formValues;

	const handleLogin = (e: React.FormEvent ) => {
		e.preventDefault();
    console.log({email, password});
		dispatch( startLoginEmailPassword(email, password));
	}
	
	return (
		<div>
			<h1>{title}</h1>

			<form onSubmit={ handleLogin }>
				<input 
					type="text" 
					placeholder="Email"
					name="email"
					autoComplete="off"
					value={ email }
					onChange={ handleInputChange }
				/>

				<input 
					type="password" 
					placeholder="Password"
					name="password"
					autoComplete="off"
					value={ password }
					onChange={ handleInputChange }
				/>

				<button type="submit">Login</button>

			</form>
			{/* <GoogleLogin
    clientId="727616130057-5d80d13l0pl7j3rdrf6hc51796i6auqb.apps.googleusercontent.com"
    buttonText="Login With Google"
    onSuccess={handleGoogleLogin}
    onFailure={handleGoogleLogin}
    cookiePolicy={'single_host_origin'}
  /> */}
  <GoogleLoginButton/>

		</div>
	)
};
