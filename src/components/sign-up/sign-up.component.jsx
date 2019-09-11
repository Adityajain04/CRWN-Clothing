import React, {Component} from 'react';
import FormInput from '../form-input/form-input.component';
import CutomButton from '../custom-button/custom-button.component'
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils.js';

import './sign-up.styles.scss';

class SignUp extends Component{
	
	constructor(props){
		super(props);
		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		};
	}

	handleSubmit = async event => {
		event.preventDefault();
		const {displayName, email, password, confirmPassword} = this.state;

		if(password !== confirmPassword){
			alert("password don't match");
			return;
		}

		try{
			const {user} = await auth.createUserWithEmailAndPassword(email, password);
			await createUserProfileDocument(user, {displayName});
			this.setState({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: ''
			})
		}catch(error){
			console.log(error)
		}
	}

	handleChange = event => {
		const {name, value} = event.target;

		this.setState({[name]: value}) 
	}

	render(){

		return(
			<div className="sign-up">
				<h2 className="title">I do not have a account</h2>
				<span>Sign up with your email and password</span>

				<form className="sign-up-form" onSubmit = {this.handleSubmit}>

					<FormInput name="displayName" type="text" value={this.state.displayName} handleChange = {this.handleChange} label="Display Name" required/>

					<FormInput name="email" type="email" value={this.state.email} handleChange = {this.handleChange} label="Email" required/>
					
					<FormInput name="password" type="password" value={this.state.password} handleChange = {this.handleChange} label="Password" required/>

					<FormInput name="confirmPassword" type="password" value={this.state.confirmPassword} handleChange = {this.handleChange} label="Confirm Password" required/>

					<div className="buttons">
						<CutomButton type="submit"> Sign Up </CutomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignUp;