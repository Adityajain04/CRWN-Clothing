import React, {Component} from 'react';
import FormInput from '../form-input/form-input.component';
import CutomButton from '../custom-button/custom-button.component'

import {auth, signInWithGoogle} from '../../firebase/firebase.utils.js';
import './sign-in.styles.scss';

class SignIn extends Component{
	
	constructor(props){
		super(props);
		this.state = {
			email: '',
			password: ''
		};
	}

	handleSubmit = async event => {
		event.preventDefault();

		const {email, password} = this.state;

		try{
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({email: '', password: ''})
		}catch(error){
			console.log(error);
		}
	}

	handleChange = event => {
		const {value, name} = event.target;
		this.setState({[name]: value}); 
	}

	render(){
		return(
			<div className="sign-in">
				<h2 className="title">I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit = {this.handleSubmit}>
					<FormInput name="email" type="email" value={this.state.email} handleChange = {this.handleChange} label="Email" required/>
					
					<FormInput name="password" type="password" value={this.state.password} handleChange = {this.handleChange} label="Password" required/>

					<div className="buttons">
						<CutomButton type="submit"> Sign in </CutomButton>
						<CutomButton onClick={signInWithGoogle} isGoogleSignIn> Sign in with google </CutomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;