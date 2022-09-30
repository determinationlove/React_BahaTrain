import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';
import { device } from '../../../device';

interface ProfileStates {

}

interface ProfileProps {

}

export class Profile extends React.Component<ProfileProps, ProfileStates> {

    constructor(props: ProfileProps) {
        super(props);
        this.state = {};
    }

    readonly aboutMe = styled.div`
        display: flex;
        position: relative; 
        justify-content: center;
		align-items: center;;
        width: 100%;
        height: 400px;

        @media ${device.mobileL} {
            height: 100%;
        }
    `;
    readonly MyPic = styled.img`
        display: flex;
        position: relative; 
        width: 200px;
        height: 200px;
        border-radius:50%;
        border: 8px;
        border-color: #76bfb7;
        border-style: solid;
        margin-right: 6%;

        @media ${device.mobileL} {
            width: 100px;
            height: 100px;
        }
    `;
    readonly Mydata = styled.p`
        display: flex;
        position: relative; 
        justify-content: center;
		align-items: center;;
        flex-flow: column;
        width: 1000px;

        @media ${device.mobileL} {
            width: 50%;
        }
    `;
    readonly MyName = styled.p`
        display: flex;
        position: relative; 
        width: 100%;
        align-items: center;
        font-family: "微軟正黑體";
		font-size: 30px;
        font-weight: bold;
		color: #0088ff;

        @media ${device.mobileL} {
            font-size: 20px;
        }
    `;
    readonly MyIntroduction = styled.p`
        display: block;
        position: relative; 
        width: 100%;
        font-family: "微軟正黑體";
        font-size: 20px;
        font-weight: bold;
        color: #222222;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        @media ${device.mobileL} {
            font-size: 15px;
        }
    `;
    readonly MyURL = styled.div`
        display: flex;
        position: relative; 
        width: 1000px;
        padding-top: 3%;

        @media ${device.mobileL} {
            padding-top: 10%;
            width: 100%;
        }
    `;
    readonly a = styled.a`
        display: flex;
        position: relative; 
        padding-right: 3%;
    `;
    readonly b = styled.a`
        color: #7d7d7dff; 
        font-Size: 15px;
    `;

    render() {
        return (
            <div>
                <this.aboutMe>
                    <this.MyPic src='img/pic.png' />
                    <this.Mydata>
                        <this.MyName>
                            燐火幽冥
                            <this.b>／網站作者</this.b>
                        </this.MyName>
                        <this.MyIntroduction>
                            技能樹亂點的六邊形戰五渣，什麼都涉獵，什麼都不專精。
                        </this.MyIntroduction>
                        <this.MyURL>
                            <this.a href="https://home.gamer.com.tw/homeindex.php?owner=guiltyghost" target="_blank">
                                <img src='img/baha_icon.png'
                                    style={{ width: '35px', marginRight: '3%' }}
                                />
                            </this.a>

                            <this.a href="https://www.pixiv.net/users/20393834" target="_blank">
                                <img src='img/pixiv.png'
                                    style={{ width: '35px', marginRight: '3%', borderRadius: '6px', }}
                                />
                            </this.a>

                            <this.a href="https://twitter.com/Determi_love" target="_blank">
                                <img src='img/twitter.png'
                                    style={{ width: '35px', marginRight: '3%' }}
                                />
                            </this.a>
                        </this.MyURL>
                    </this.Mydata>

                </this.aboutMe>
            </div>
        );
    }
}

export default Profile;