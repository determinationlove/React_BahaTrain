import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';
import { PropertyName } from 'typescript';
import { data } from "../eventData";
import '../../.././index.css';
import { device } from '../../../device';

interface EventBlockStates {
	
}

interface EventBlockProps {
	eventCode: any;
	children: React.ReactNode;
}


export class EventBlock extends React.Component<EventBlockProps, EventBlockStates> {

	constructor(props: EventBlockProps) {
		super(props);
		this.state = {
			
		};
	}

	readonly Introduction = styled.div`
        display: flex;
		position: fixed;
		z-index: 10;
		justify-content: center;
		align-items: center;
		width: 700px;
        height: 700px;
    	left: 62%;
		top: 20%;

		@media ${device.mobile} {
			width: 400px;
            height: 400px;
			left: 0%;
			top: 32%;
		}

		@media ${device.mobileL} {
			width: 400px;
            height: 400px;
			left: 0%;
			top: 35%;
		}
    `;
	readonly BG = styled.div`
		display: flex;
		position: relative;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		background-color: #54e3cb;
		border-radius: 80% 20% 70% 30% / 23% 74% 26% 77% ;
		border-width: 9px; 
		border-style: solid;
		border-color: #ffffff;

		@media ${device.mobile} {
			max-width: 100%;
			max-height: 100%;
		}

		@media ${device.mobileL} {
			max-width: 100%;
			max-height: 100%;
		}

		&:before {
			content: "";
			display: inline-block;
			vertical-align: middle;
			padding-top: 100%;
			height: 0;
		}
		& span {
			display: inline-block;
			vertical-align: middle;
		}
    `;
	readonly Introduction_Title = styled.p`
		display: flex;	
		position: absolute;
		justify-content: center;
		align-items: center;
		font-family: "微軟正黑體";
		font-size: 2vw;
		font-weight: bold;
		color: #ffffff;
		padding-bottom: 50%;

		@media ${device.mobile} {
			font-size: 20px;
			padding-bottom: 45%;
		}

		@media ${device.laptop} {
			font-size: 25px;
			padding-bottom: 45%;
		}
	`;
	readonly Introduction_Age = styled.p`
		display: flex;	
		position: absolute;
		justify-content: center;
		align-items: center;
		font-family: "微軟正黑體";
		font-size: 1vw;
		letter-spacing: 3px;
		color: #ffffff;
		padding-left: 50%;
		padding-bottom: 75%;

		@media ${device.mobileL} {
			font-size: 13px;
		}
    `;
	readonly Introduction_Overturn = styled.div`
		display: flex;	
		position: absolute;
		justify-content: center;
		align-items: center;
		flex-flow: column;
		font-family: "微軟正黑體";
		font-size: 1vw;
		font-weight: bold;
		color: #4d4d4d;
		padding-bottom: 10%;

		@media ${device.mobile} {
			font-size: 12px;
		}

		@media ${device.mobileL} {
			font-size: 13px;
		}
	`;
	readonly linkBlock = styled.div`
		display: flex;	
		position: absolute;
		justify-content: center;
		align-items: center;;
		flex-flow: column;
		padding-top: 40%;
		width: 50%;
	`;
	readonly links = styled.div`
		display: flex;	
		position: relative;
		justify-content: center;
		align-items: center;
		font-weight: bold;
		font-family: "微軟正黑體";
		font-size: 30px;
		color: #ffffff;
		text-decoration: none;
		width: 100%;
		margin: 20px;

	`;
	readonly href = styled.a`
		font-family: "微軟正黑體";
		font-size: 1.5vw;
		color: #0088ff;
		text-decoration: none;

		@media ${device.mobile} {
			font-size: 18px;
		}

		@media ${device.mobileL} {
			font-size: 18px;
		}

		&:visited {
			color: #0088ff;
		}

		&:active {
			color: #6d98bd;
		}
	`;
	readonly linksIcon = styled.img`
		display: flex;	
		position: relative;
		justify-content: center;
		align-items: center;;
		//padding-bottom: 50%;
		background-image: url('../../../../public/img/baha_icon.png');
		width: 35px;
		height: 35px;
		padding-right: 5%;

		@media ${device.mobile} {
			max-width: 25px;
			max-height: 25px;
		}
	`;
	

	render() {
		return (
			<this.Introduction>
				<this.BG>
					{this.props.children}
					<this.Introduction_Title>
						{this.props.eventCode.title}
					</this.Introduction_Title>

					<this.Introduction_Age>
						{this.props.eventCode.age}
					</this.Introduction_Age>

					<this.Introduction_Overturn>
						事件發展：
						<p style={{ color: 'black', marginBottom:'10px'}}>
							{this.props.eventCode.first} → {this.props.eventCode.last}
						</p>
					</this.Introduction_Overturn>


					<this.linkBlock>
						<this.links>
							<this.linksIcon src='img/baha_icon.png' />
							<this.href href={this.props.eventCode.start_Article} target="_blank"
								style={{ textDecoration: 'none' }}>
								事件初期文章
							</this.href>
							<img src='img/exit-top-right.png' style={{ width: '15px', marginLeft: '3%' }} />
						</this.links>

						<this.links>
							<this.linksIcon src='img/baha_icon.png' />
							<this.href href={this.props.eventCode.final_Article} target="_blank"
								className='a.page-links'>
								事件後期文章
							</this.href>
							<img src='img/exit-top-right.png' style={{ width: '15px', marginLeft: '3%' }} />
						</this.links>
					</this.linkBlock>
				</this.BG>
			</this.Introduction>

		);
	}
}

export default EventBlock;
