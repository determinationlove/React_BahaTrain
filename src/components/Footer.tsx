import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import AboutSite from '../pages/footer/aboutsite';
import { device } from '../device';


interface FooterStates {

}

interface FooterProps {

}

export class Footer extends React.Component<FooterProps, FooterStates> {

    constructor(props: FooterProps) {
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
        background-color: rgba(55, 55, 55);
        top: 30px;

        @media ${device.mobile} {

        }
    `;

    readonly nav = styled.nav`
        display: flex;
        position: relative; 
        width: 30%;
        @media ${device.mobile} {
            width: 75%;
        }

        @media ${device.mobileL} {
            width: 75%;
        }
    `;

    readonly block = styled(Link)`
        display: flex;
        position: relative; 
        margin: 3%;
        font-family: "微軟正黑體";
        font-weight: bold;
        color: #ffffff;
        font-size: 16px;
        text-decoration:none;
        width: 30%;

        @media ${device.mobile} {
            width: 30%;
        }

        @media ${device.mobileL} {
            width: 30%;
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
                    <this.block to="/aboutsite">關於本站</this.block>
                    <this.block to="/">更新日誌</this.block>
                    <this.block to="/Planning">後續規劃</this.block>
                </this.nav>
            </this.bg>

        );
    }
}

export default Footer;