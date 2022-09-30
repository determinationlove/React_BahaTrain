import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../../../components/Footer';
import { device } from '../../../device';

interface SiteIntroductionStates {

}

interface SiteIntroductionProps {

}

export class SiteIntroduction extends React.Component<SiteIntroductionProps, SiteIntroductionStates> {

    constructor(props: SiteIntroductionProps) {
        super(props);
        this.state = {};
    }

    readonly block = styled.div`
        display: flex;
        position: relative;
        justify-content: center;
		align-items: center;
        flex-flow: column;
        width: 90%;
        height: 500px;
        background-color: #e1e1e1;
        margin: 3%;

        @media ${device.mobileL} {
            height: 100%;
        }
    `;
    readonly Introduction = styled.div`
        display: flex;
        position: relative;
        width: 100%;
        height: 100%;
        font-family: "微軟正黑體";
        font-size: 20px;
        color: #222222;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 50px;
        line-height: 2;

        @media ${device.mobileL} {
            margin: 20px;
            font-size: 15px;
            margin: 0px;
            text-overflow: unset;
            white-space: unset;
        }
    `;
    readonly link = styled(Link)`
        color: #222222;

        &:visited{
            color: #0088ff;
        }

        &:active {
			color: #499ca9;
		}
    `;

    render() {
        return (
            <div style={{ display: 'flex', flexFlow: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <this.block>
                    <this.Introduction>
                        <text style={{margin:'10px'}}>
                            本站以 React.JS 製作，因為作者想要邊實戰邊學前端工程技術而開發，日後還會因個人學習進度加入更多功能，詳情請見{'\n'}
                            <this.link to="/Planning">後續規劃</this.link><br />
                            所有巴哈姆特文章皆採用「Co」連結，但仍無法保證文章不會被系統刪除。<br />
                            <br />
                            如果本站的資料有問題，或是有想要補充的失智列車事件，
                            可使用哈哈姆特敲我私訊，未來預計會於場外休憩區發布本站文章，也可以在那裡留言告訴我，<br />
                            但是一些政治廚日常口水攻防...等小型且性質過於重複的事件並沒有打算刊載，
                            本站目的是希望網友能透過案例警醒自己，而不是提供一個專門掛人的空間。<br />
                            <br />
                            另外，希望大家能以健康的心態看待失智列車，所有的過失皆來自於放棄思考，被情緒支配行為，<br />
                            我們該做的是在事態尚未明朗之前{'\n'}<strong>督促調查</strong>{'\n'}，
                            而非急著究責、謾罵嘲笑，或是怕自己成為「輸家」便一聲不吭等待某個誰給出結果、甚至對任何事都漠不關心。<br />
                            <br />
                            台灣的新聞媒體就是這副無可救藥的德行，國家監管也並不有力，甚至想把問題推給論壇。百姓當自強，不要一味的被餵食了。
                        </text>
                    </this.Introduction>
                </this.block>

                <Footer />
            </div>
        );
    }
}

export default SiteIntroduction;
