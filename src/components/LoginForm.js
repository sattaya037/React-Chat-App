import React, { Component } from 'react';
import { VERIFY_USER } from '../Event'
import { Input, Dialog , Button,Page,Card } from 'react-onsenui';
import Center from 'react-center';
import { Form, FormGroup, Label, FormText } from 'reactstrap';

export default class LoginForm extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	nickname:null,
	  	error:""
	  };
	}

	setUser = ({user, isUser})=>{

		if(isUser){
			this.setError("User name taken")
		}else{
			this.setError("")
			this.props.setUser(user)
		}
	}

	handleSubmit = (e)=>{
		e.preventDefault()
		const { socket } = this.props
        const { nickname } = this.state
        if(nickname !== null && nickname !== ""){
            socket.emit(VERIFY_USER, nickname, this.setUser)

        }else{
            alert("Please specify your name.")
        }
	}

	handleChange = (e)=>{
		this.setState({nickname:e.target.value})
	}

	setError = (error)=>{
		this.setState({error})
	}

	render() {	
		const { nickname, error } = this.state
		return (
			<div className="login">
				<Form  >
                    <div className="title">
                    <Label>
						<h1>Get Start Chat</h1>
					</Label>
                    </div>
                        <Input
                            ref={(input)=>{ this.textInput = input }} 
                            type="text"
                            value={nickname}
                            onChange={this.handleChange}
                            modifier='material'
                            placeholder={'Your Name'}
                            />
                            <div className="error">{error ? error:null}</div> 

                 <div className="Enter">    
                    <Button  modifier="material" onClick={this.handleSubmit}>
                        Enter
                    </Button>
                </div>         
				</Form>
              
             
			</div>
		);
	}
}