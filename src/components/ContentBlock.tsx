import React from 'react';
import styled from 'styled-components';
import ClickMe from './ClickMe';
import { device } from '../device';

interface ContentBlockStates {

}

interface ContentBlockProps {
	title: string;
	text: string;
	//btnset: React.Component;
	children: React.ReactNode;
	ContentBlock_BG: any;
}


// ---【自訂 Component】---

class ContentBlock extends React.Component<ContentBlockProps, ContentBlockStates> {
	constructor(props: ContentBlockProps) {
		super(props);
		this.state = {
		};
	}

	readonly title_style = styled.div`
		display: flex;
		color: white;
		font-Size: calc(15px + 2vw);
		align-Items: center;
		justify-Content: center;
		position: relative;
		width: 100%;
		height: 100%;
		font-Weight: bold;
		z-Index: 3;

		@media ${device.mobileL} {
			font-Size: 30px;
		}
	`;

	readonly BG_style = styled.div`
		background-Image: url(${this.props.ContentBlock_BG});
		background-position: center;
		background-Size: cover;
		width: 100%;
		height: 50%;
		position: absolute;
		z-Index: 1;
	`;

	readonly black_style = styled.div`
		display: flex;
		background-Color: rgba(0, 0, 0, 0.5);
		align-Items: center;
		justify-Content: center;
		position: absolute;
		width: 100%;
		height: 50%;
		z-Index: 2;
	`

	readonly text_style = styled.div`
		display: flex;
		position: relative;
		justify-Content: space-around;
		align-Items: center;
		font-Family: 微軟正黑體;
		font-Weight: bold;
		font-Size: 1.2vw;
		word-wrap: break-word;
		width: 100%;
		height: 50%;
		white-Space: pre-line;
		z-Index: 5;

		@media ${device.mobileL} {
			width: 90%;
			font-Size: 100%;
			//margin-right: 10px;
			margin-left: 5%;
			overflow: auto;
		}
	`;

	readonly Block_style = styled.div`
		display: flex;
		flex-Flow: nowrap;
		flex-Direction: column;
		position: relative;
		background-Color: rgba(235, 250, 250);
		width: 100%;
		height: 900px;
		margin-Top: 20px;
		margin-Bottom: 20px;
		border-Radius: 50px;
	`;

	render() {
		return (
			<this.Block_style>

				<this.black_style></this.black_style>
				<this.BG_style ></this.BG_style>

				<div style={{
					display: 'flex', position: 'absolute', width: '100%', height: '100%',
					justifyContent: 'center', alignItems: 'center0', flexFlow: 'column'
				}}>

					<this.title_style>
						{this.props.title}
					</this.title_style>

					<this.text_style>
						{this.props.text}
					</this.text_style>

					{this.props.children}
				</div>

			</this.Block_style>

		);
	}
}

export default ContentBlock;
