/* eslint-disable react/jsx-pascal-case */
import { url } from 'inspector';
import * as React from 'react';
import { transpile } from 'typescript';
import ContentBlock from '../../components/ContentBlock';
import ContentBlock_Left from '../../components/ContentBlock_Left';
import ClickMe from '../../components/ClickMe';
import Footer from '../../components/Footer';
import { click } from '@testing-library/user-event/dist/click';
import { EventBlock } from '../event/components/eventBlock';
import { data } from "../event/eventData";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Outlet, useLocation, BrowserRouter } from 'react-router-dom';
import Header from '../../components/Header';


interface IndexStates {

}

interface IndexProps {

}

export class Home extends React.Component<IndexProps, IndexStates> {

    constructor(props: IndexProps) {
        super(props);
        this.state = {};
    }

    render() {
        var text1 = `
            "失智列車" 泛指廣大網路鄉民在情報尚未明朗、調查不夠充分時，\n 
            因為新聞媒體的腥羶色報導而妄下評斷、嘲諷叫罵，最終案情卻大翻盤的狀況。
        `;
        var text2 = `
            因大眾媒體識讀觀念尚未完全普級，\n
            本站以巴哈姆特-場外休憩區為例，彙整討論板的各項失智列車事件。\n
            希望大眾引以為戒，以審慎且不放棄思考的心態看待台灣的新聞。\n
            \n
            請注意，雖然視聽者輕率進行聲討固然錯誤，\n
            但新聞台之報導為國家資訊推送主力，對於這般亂象需負起較大責任，\n
            政府機關也應善盡監督新聞內容之職責，而非將問題全部歸咎於網路論壇及人民。\n
        `;

        return (
            <div>
                <Header />
                <ContentBlock
                    title={'什麼是「失智列車」？'}
                    text={
                        text1
                    }
                    ContentBlock_BG={'train.png'}
                >
                    <div style={{ 
                        display:'flex', position:'relative', width: '100%', height: '40%',
                        justifyContent: 'center', alignItems: 'center',
                    }}>
                        <Link to="/eventtrain" style={{textDecoration: 'none',}}>
                            <ClickMe text={'點我去看車'} link={''} />
                        </Link>
                    </div>
                </ContentBlock>
                
                <ContentBlock_Left
                    title={'本站成立用意'}
                    text={
                        text2
                    }
                    ContentBlock_BG={'cool-background.png'}
                />

                <EventBlock eventCode={data.Epinephelinae}/>
                <Footer/>
            </div>

        );
    }
}

export default Home;
