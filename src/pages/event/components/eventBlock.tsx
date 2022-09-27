import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';
import { PropertyName } from 'typescript';
import { data } from "../eventData";
import '../../.././index.css';

interface EventBlockStates {

}

interface EventBlockProps {
	eventCode: any;
}


export class EventBlock extends React.Component<EventBlockProps, EventBlockStates> {

	constructor(props: EventBlockProps) {
		super(props);
		this.state = {};
	}

	readonly Introduction = styled.div`
        display: flex;
		position: fixed;
		z-index: 10;
		justify-content: center;
		align-items: center;
    	left: 50%;
    `;
	readonly BG = styled.div`
		display: flex;
		position: relative;
		justify-content: center;
		align-items: center;
		min-width: 39vw;
		min-height: 40vw;
		background-color: #54e3cb;
		border-radius: 80% 20% 70% 30% / 23% 74% 26% 77% ;

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
		font-size: 80vm;
		font-weight: bold;
		color: #ffffff;
		padding-bottom: 50%;
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
		font-size: 25px;
		color: #ffffff;
		text-decoration: none;
		width: 100%;
		margin: 20px;
	`;
	readonly href = styled.a`
		font-family: "微軟正黑體";
		font-size: 25px;
		color: #0088ff;
		text-decoration: none;

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
	`;
	readonly back = styled.img`
		display: flex;
		position: absolute;
		justify-content: right;
		align-items: flex-start;
	`;


	render() {
		return (

			<this.Introduction>
				<this.BG>
					<this.back src='img/cancel.png'>
					</this.back>
					<this.Introduction_Title>
						{this.props.eventCode.title}
					</this.Introduction_Title>

					<this.Introduction_Age>
						{this.props.eventCode.age}
					</this.Introduction_Age>

					<this.Introduction_Overturn>
						事件發展：
						<p style={{ color: 'black' }}>
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
