import React, { useState, ReactElement } from 'react';
import { useRef, useEffect } from "react";
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';
import data from "../eventData";
import EventBlock from './eventBlock';
import { device } from '../../../device';
import EventTrain from '../eventtrain';
import { } from './timeline';

export type Props = {
    id: any,
    children?: React.ReactNode,
    onFocusEvent: (id: any) => void,
    focusEvent: boolean,
};

export function RiverPoint({ id, children, onFocusEvent, focusEvent }: Props) {

    //const [Last, setLast] = useState(null);
    //let prev:any = null;

    return (
        <Event>
            <AgeYear> {children} </AgeYear>
            <Title onClick={() => onFocusEvent(id)}>
                {id.title}
            </Title>
            <LineDot>
                <Dot />
                <LineHR />
            </LineDot>
            {
                focusEvent &&
                <EventBlock eventCode={id}>
                    <Back src='img/cancel.png'
                        onClick={() => onFocusEvent(null)}
                    />
                </EventBlock>
            }
        </Event>
    );

}

export default RiverPoint;

const Event = styled.div`
display: flex;
position: relative;
justify-content: center;
align-items: center;
flex-flow: column;
width: 20%;
height: 100%;
font-weight: bold;
font-family: "微軟正黑體";
font-size: 15px;
white-space: nowrap; 
margin: 5%;
`;
const AgeYear = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-flow: column;
font-size: 30px;
color: #00a383;

@media ${device.mobile} {
    font-size: 25px;
}

@media ${device.mobileL} {
    font-size: 25px;
}
`;
const LineDot = styled.div`
display: flex;
justify-content: center;
align-items: center;

margin: 20%;
`;
const Dot = styled.div`
display: flex;
position: absolute;
justify-content: center;
align-items: center;
width: 10px;
height: 10px;
border-radius:999em;
background-color: black;
z-index: 1;
//margin-top: 5%;
`;
const LineHR = styled.div`
display: flex;
justify-content: center;
align-items: center;
z-index: -1;
width: 100vw;
border-bottom: 1px solid red;

`;
const Title = styled.div`
display: inline-block;
margin-top: 25%;
font-size: 24px; 
cursor: pointer;

@media ${device.mobile} {
    font-size: 18px; 
}
`;
const Back = styled.img`
display: flex;
position: relative;
z-index: 1;
//justify-content: right;
//align-items: flex-start;
width: 10%;
height: 10%;
margin-left: 80%;
margin-bottom: 90%;
cursor: pointer;
`;
