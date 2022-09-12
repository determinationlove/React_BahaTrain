import React from 'react';
import styled from 'styled-components';
import { setSyntheticLeadingComments } from 'typescript';
import { BrowserRouter as Router, Link } from 'react-router-dom';

interface ClickMeStates {

}

interface ClickMeProps {
	text: string;
	link: string;
}

export class ClickMe extends React.Component<ClickMeProps, ClickMeStates> {

	constructor(props: ClickMeProps) {
		super(props);
		this.state = {
		};
	}

	readonly btn = styled.button`
		align-items: center;
		appearance: none;
		background-color: #FCFCFD;
		border-radius: 4px;
		border-width: 0;
		box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset;
		box-sizing: border-box;
		color: #36395A;
		cursor: pointer;
		display: inline-flex;
		font-family: "微軟正黑體";
		height: 48px;
		justify-content: center;
		line-height: 1;
		list-style: none;
		overflow: hidden;
		padding-left: 16px;
		padding-right: 16px;
		position: relative;
		text-align: left;
		text-decoration: none;
		transition: box-shadow .15s,transform .15s;
		user-select: none;
		-webkit-user-select: none;
		touch-action: manipulation;
		white-space: nowrap;
		will-change: box-shadow,transform;
		font-size: 18px;
		font-weight: bold;
		z-index: 50;
		text-decoration: none;
	
		&:focus {
		box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
		}
		
		&:hover {
		box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
		transform: translateY(-2px);
		}
		
		&:active {
		box-shadow: #D6D6E7 0 3px 7px inset;
		transform: translateY(2px);
		}
	`;

	render() {
		return (
			<div>
				<a href={this.props.link} target="_self" style={{ textDecoration: 'none' }}>
					<this.btn>
						{this.props.text}
					</this.btn>
				</a>
			</div>
		);
	}
}

export default ClickMe;