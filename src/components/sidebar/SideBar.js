import React, { Component } from 'react';
import { IoMdLogOut } from "react-icons/io";
import SideBarOption from './SideBarOption'
import {  differenceBy } from 'lodash' 
import { Navbar,NavbarBrand} from 'reactstrap';
export default class SideBar extends Component{
	static type = {
		USERS:"users",
    }
    
    
	render(){
		const {   user, logout, users } = this.props
		return (
			<div id="side-bar">
			<Navbar className="heading">
			<NavbarBrand  >Online User</NavbarBrand>

			</Navbar>
					<div 	className="users" 	ref='users' >	
					{					
							differenceBy(users, [user], 'name').map((user)=>{
								return <SideBarOption 
									key = { user.id }
									name = { user.name }
								/>
							})
						}
					</div>
					<div className="current-user">
						<span>User:{user.name}</span>
						<div onClick={()=>{logout()}} title="Logout" >
							<IoMdLogOut size={30} />	
						</div>
					</div>
			</div>
		);
	
	}
}