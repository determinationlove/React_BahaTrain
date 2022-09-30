import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import Profile from '../components/profile';
import SiteIntroduction from '../components/SiteIntroduction';
import { plan } from "./plan";
import { device } from '../../../device';


interface DoneStates {

}

interface DoneProps {
    //children: React.ReactNode;
    planCode: any;
}

export class Done extends React.Component<DoneProps, DoneStates> {

    constructor(props: DoneProps) {
        super(props);
        this.state = {
            //done: false,
        };
    }

    readonly div = styled.div`
        display: flex;	
		position: relative;
		justify-content: flex-start;
		align-items: center;
		font-weight: bold;
		font-family: "微軟正黑體";
		font-size: 1vw;
		color: #000000;
		text-decoration: none;
		width: 80%;
        height: 100%;
        margin-left: 1%;

        @media ${device.mobileL} {
            height: 10%;
        }
    `;
    readonly done = styled.img`
        display: flex;	
		position: relative;
        width: 20px;
        margin-right: 10px;

        @media ${device.mobileL} {
            width: 30px;
        }
    `;
    readonly text = styled.div`
        src: 'img/ieda.png'; 
    `;

    handle() {
        
    }

    render() {
        return (
            <this.div>
                <this.done src={this.props.planCode.icon}/>
                {this.props.planCode.title}
            </this.div>
        );
    }
}

export default Done;
