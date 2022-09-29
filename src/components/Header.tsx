import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';

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
`;

readonly nav = styled.nav`
    display: flex;
    position: relative; 
    width: 25%;
`;

readonly block = styled(Link)`
    display: flex;
    position: relative; 
    margin: 3%;
    font-family: "微軟正黑體";
    font-weight: bold;
    color: #ffffff;
    font-size: 1.2vw;
    text-decoration:none;
    width: 30%;
    margin-right: 10%;

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