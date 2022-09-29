import React from 'react';
import { useEffect } from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Outlet, useLocation, BrowserRouter } from 'react-router-dom';


interface AppStates {
	
}

interface AppProps {
	children?: React.ReactNode;
}


export class App extends React.Component<AppProps, AppStates> {

	constructor(props: AppProps) {
		super(props);
		this.state = {};
	}
	

	render() {
		return (
			<div style={{  }}>

			</div>
		);
	}
}
