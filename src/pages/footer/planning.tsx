import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Done from './components/done';
import Profile from './components/profile';
import SiteIntroduction from './components/SiteIntroduction';
import { plan } from "../footer/components/plan";

interface PlanningStates {
	
}

interface PlanningProps {

}

export class Planning extends React.Component<PlanningProps, PlanningStates> {

	constructor(props: PlanningProps) {
		super(props);
		this.state = {};
	}

    readonly plan = styled.div`
        display: flex;
        position: relative;
        flex-flow: column;
        justify-content: flex-start;
        align-items: center;
        height: 100%;
        margin: 10px;
    `;
    
    readonly text = styled.text`
    `;


	render() {
		return (
			<div style={{ 
                display: 'flex', flexFlow: 'column', justifyContent: 'center', 
                position: 'relative', height:'1000px'
            }}>
                <Header />
                    <this.plan>
                        <Done planCode={plan.A}></Done>
                        <Done planCode={plan.B}></Done>
                        <Done planCode={plan.C}></Done>
                        <Done planCode={plan.D}></Done>
                        <Done planCode={plan.E}></Done>
                    </this.plan>
                <Footer />
			</div>
		);
	}
}

export default Planning;