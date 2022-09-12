import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';
import Header from '../../components/Header';
import Profile from './components/profile';
import SiteIntroduction from './components/SiteIntroduction';

interface AboutSiteStates {
	
}

interface AboutSiteProps {

}

export class AboutSite extends React.Component<AboutSiteProps, AboutSiteStates> {

	constructor(props: AboutSiteProps) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<Header />
				<Profile />
				<SiteIntroduction />
			</div>
		);
	}
}

export default AboutSite;
