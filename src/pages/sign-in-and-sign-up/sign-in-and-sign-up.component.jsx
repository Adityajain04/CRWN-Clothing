import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component.jsx';
import SignUp from '../../components/sign-up/sign-up.component.jsx';
import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUp = (props) =>{
	return(
		<div className="sign-in-and-sign-up">
			<SignIn />
			<SignUp />
		</div>
	);
}

export default SignInAndSignUp;