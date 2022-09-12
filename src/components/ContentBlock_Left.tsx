import React from 'react';

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

	render() {
        const title = 'title';
		const title_style = {
			display: 'flex',
			color: 'white',
			fontSize: '50px',
			alignItems: 'center',
			justifyContent: 'flex-start',
			height: '50%',
			padding: '6%',
		} as React.CSSProperties;

		const black = 'black';
		const black_style = {
			display: 'flex',
			position: 'relative',
			alignItems: 'center',
			justifyContent: 'center',
            fontFamily: '微軟正黑體',
			width: '50%',
		} as React.CSSProperties;

		const text = 'text';
		const text_style = {
			display: 'flex',
			position: 'relative',
			justifyContent: 'space-around',
			alignItems: 'center',
			fontFamily: '微軟正黑體',
            color: 'white',
			fontSize: '18px',
			width: '100%',
			whiteSpace: 'pre-line',
		} as React.CSSProperties;

		const Block = 'Block';
		const Block_style = {
			display: 'flex',
			flexFlow: 'nowrap',
			flexDirection: 'row',
			position: 'relative',
            backgroundImage: `url(img/${this.props.ContentBlock_BG})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
			width: '100%',
			height: '500px',
            marginTop: '20px',
            marginBottom: '20px',
		} as React.CSSProperties;

		return (
			<div className={Block + '1'} style={Block_style}>
				
				<div className={black + '1'} style={black_style}>	
					<div className={title + '1'} style={title_style}>
						{this.props.title}
					</div>
				</div>
				
				<div className={text + '1'} style={text_style}>
					{this.props.text}
				</div>
			</div>
		);
	}
}

export default ContentBlock_Left;