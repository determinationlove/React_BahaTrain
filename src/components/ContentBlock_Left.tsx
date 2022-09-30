import React from 'react';
import styled from 'styled-components';
import { device } from '../device';

interface ContentBlock_LeftStates {

}

interface ContentBlock_LeftProps {
	title: string;
	text: string;
	ContentBlock_BG: any;
}

export class ContentBlock_Left extends React.Component<ContentBlock_LeftProps, ContentBlock_LeftStates> {

	constructor(props: ContentBlock_LeftProps) {
		super(props);
		this.state = {
			title: "",
			text: "",
			ContentBlock_BG: null,
		};
	}

	readonly title_style = styled.div`
		display:  flex ;
		color:  white ;
		font-Size:  calc(15px + 2vw) ;
		align-Items:  center ;
		justify-Content:  flex-start ;
		height:  50% ;
		padding:  6% ;

		@media ${device.mobile} {
			font-Size: 20px;
		}

		@media ${device.mobileL} {
			font-Size: 20px;
		}
	`;

	readonly black_style = styled.div`
		display:  flex ;
		position:  relative ;
		align-Items:  center ;
		justify-Content:  center ;
		font-Family:  微軟正黑體 ;
		width:  50% ;
	`;

	readonly text_style = styled.div`
		display:  flex ;
		position:  relative ;
		justify-Content:  space-around ;
		align-Items:  center ;
		font-Family:  微軟正黑體 ;
		color:  white ;
		font-Size:  1vw ;
		width:  100% ;
		white-Space:  pre-line ;

		@media ${device.mobile} {
			font-Size:  12px ;
			margin: 5px;
			width:  90% ;
		}

		@media ${device.mobileL} {
			font-Size:  12px ;
			margin: 5px;
			width:  90% ;
		}
	`;

	readonly Block_style = styled.div`
		display:  flex ;
		flex-Flow:  nowrap ;
		flex-Direction:  row ;
		position:  relative ;
		background-Image: url(img/${this.props.ContentBlock_BG});
		background-Position:  center ;
		background-Size:  cover ;
		width:  100% ;
		height:  500px ;
		margin-Top:  20px ;
		margin-Bottom:  20px;

		@media ${device.mobile} {
			flex-Flow: column;
			margin-Bottom: 0px;
			height:  400px ;
			justify-Content:  center;
			align-Items:  center ;
		}

		@media ${device.mobileL} {
			flex-Flow: column;
			margin-Bottom: 0px;
			height:  400px ;
			justify-Content:  center;
			align-Items:  center ;
		}
	`;
	render() {
		return (
			<this.Block_style>
				<this.black_style>
					<this.title_style>
						{this.props.title}
					</this.title_style>
				</this.black_style>

				<this.text_style>
					{this.props.text}
				</this.text_style>
			</this.Block_style>
		);
	}
}

export default ContentBlock_Left;