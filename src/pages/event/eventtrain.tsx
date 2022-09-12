import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Outlet, useLocation, BrowserRouter } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Timeline } from './components/timeline';

// 事件彙整頁面

interface EventTrainStates {
	
}

interface EventTrainProps {

}

export class EventTrain extends React.Component<EventTrainProps, EventTrainStates> {

	constructor(props: EventTrainProps) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<Header />
				<Timeline />
				<Footer />
			</div>
		);
	}
}

export default EventTrain;