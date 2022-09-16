import React from 'react';
import { useRef, useEffect } from "react";
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';
import data from "../eventData";
import { useHorizontalScroll } from "../eventtrain";
import RiverPoint from './riverPoint';

interface TimelineStates {

}

function Timeline() {

    const ScrollRef = useHorizontalScroll();

    const River = styled.div`
        display: flex;
        //justify-content: center;
        //align-items: center;
        overflow: hidden;
        padding-right: 7px;
        font-weight: bold;
        font-family: "微軟正黑體";
    `;

    return (
        <div>
            <River ref={ScrollRef}>
                <RiverPoint id={data.TzuChi_rapidTest} children={2022} />
                <RiverPoint id={data.Epinephelinae} children={'　'}/>
                <RiverPoint id={data.Abe_bodyguard} children={'　'}/>
                <RiverPoint id={data.interrupt_Pelosi} children={'　'}/>
                <RiverPoint id={data.GlobalAntiScam} children={'　'}/>
                <RiverPoint id={data.Tainan_killPolice_case} children={'　'}/>
                <RiverPoint id={data.YangChengLin_EatSeafood} children={'　'}/>
            </River>
        </div>
    );

}


export default Timeline;