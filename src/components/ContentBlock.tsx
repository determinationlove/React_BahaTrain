import React from 'react';
import ClickMe from './ClickMe';

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

	render() {
		const title = 'title';
		const title_style = {
			display: 'flex',
			color: 'white',
			fontSize: '50px',
			alignItems: 'center',
			justifyContent: 'center',
			position: 'relative',
			width: '100%',
			height: '100%',
			fontWeight: 'bold',
			zIndex: '3',
		} as React.CSSProperties;

		const bg = 'BG';
		const BG_style = {
			backgroundImage: `url(img/${this.props.ContentBlock_BG})`,
			backgroundPosition: 'center',
			backgroundSize: 'cover',
			width: '100%',
			height: '50%',
			position: 'absolute',
			zIndex: '1',
		} as React.CSSProperties;

		const black = 'black';
		const black_style = {
			display: 'flex',
			backgroundColor: 'rgba(0, 0, 0, 0.5)',
			alignItems: 'center',
			justifyContent: 'center',
			position: 'absolute',
			width: '100%',
			height: '50%',
			zIndex: '2',
		} as React.CSSProperties;

		const text = 'text';
		const text_style = {
			display: 'flex',
			position: 'relative',
			justifyContent: 'space-around',
			alignItems: 'center',
			fontFamily: '微軟正黑體',
			fontWeight: 'bold',
			fontSize: '20px',
			width: '100%',
			height: '50%',
			whiteSpace: 'pre-line',
			zIndex: '5',
			//paddingTop: '20%',
		} as React.CSSProperties;


		const Block = 'Block';
		const Block_style = {
			display: 'flex',
			flexFlow: 'nowrap',
			flexDirection: 'column',
			position: 'relative',
			backgroundColor: 'rgba(235, 250, 250)',
			width: '100%',
			height: '900px',
			marginTop: '20px',
			marginBottom: '20px',
			borderRadius: '50px',
		} as React.CSSProperties;



		return (
			<div className={Block + '1'} style={Block_style}>

				<div className={black + '1'} style={black_style}></div>
				<div className={bg + '1'} style={BG_style}></div>

				<div style={{
					display: 'flex', position: 'absolute', width: '100%', height: '100%',
					justifyContent: 'center', alignItems: 'center0', flexFlow: 'column'
				}}>

					<div className={title + '1'} style={title_style}>
						{this.props.title}
					</div>

					<div className={text + '1'} style={text_style}>
						{this.props.text}
					</div>

					{this.props.children}
				</div>

			</div>

		);
	}
}

export default ContentBlock;
