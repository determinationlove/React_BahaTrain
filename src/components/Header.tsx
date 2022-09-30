import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../device';

interface HeaderStates {
	
}

interface HeaderProps {

}

export class Header extends React.Component<HeaderProps, HeaderStates> {

	constructor(props: HeaderProps) {
		super(props);
		this.state = {};
	}

    readonly bg = styled.div`
    display: flex;
    position: relative;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 150px;
    background-color: #29e1c5;

    @media ${device.mobile} {
        max-width: 100%;
        max-height: 50px;
		justify-content: center;
	}

    @media ${device.mobileL}{
        max-width: 100%;
        max-height: 50px;
		justify-content: center;
    }
`;

readonly nav = styled.nav`
    display: flex;
    position: relative; 
    justify-content: flex-end;

    @media ${device.mobile} {
        justify-content: center;
	}

    @media ${device.mobileL} {
        justify-content: center;
	}
`;

readonly block = styled(Link)`
    display: flex;
    position: relative; 
    justify-content: flex-end;
    //margin: 3%;
    font-family: "微軟正黑體";
    font-weight: bold;
    white-space: nowrap;
    color: #ffffff;
    font-size: 1.2vw;
    text-decoration: none;
    width: 100%;
    margin-right: 50%;
    margin-left: 15%;

    @media ${device.mobile} {
        max-width: 100%;
		font-Size: 20px;
        justify-content: center;
        margin-right: 25%;
        margin-left: 25%;
	}

    @media ${device.mobileL} {
        max-width: 100%;
		font-Size: 20px;
        justify-content: center;
        margin-right: 20%;
        margin-left: 20%;
	}

    &:visited {
        color: #ffffff;
    }

    &:active {
        color: #499ca9;
    }
`;

	render() {
		return (
			<this.bg>
                <this.nav>
                    <this.block to="/">首頁</this.block>
                    <this.block to="/eventtrain">失智列車一覽</this.block>
                </this.nav>


            </this.bg>
		);
	}
}

export default Header;