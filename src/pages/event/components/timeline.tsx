import React, { useState } from 'react';
import { useRef, useEffect } from "react";
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';
import data from "../eventData";
import EventTrain, { useHorizontalScroll } from "../eventtrain";
import RiverPoint, { } from './riverPoint';
import { device } from '../../../device';

/*
export function usePrevious(id:any){
    const ref = useRef();
    useEffect(
        () => {
            ref.current = id;
        }
    )
    return ref.current;
}*/

function Timeline() {

    const ScrollRef = useHorizontalScroll();

    const [focusEventID, setFocusEventID] = useState<any>(null);

    let idlist = [
        data.TzuChi_rapidTest,
        data.Abe_bodyguard,
        data.interrupt_Pelosi,
        data.GlobalAntiScam,
        data.Tainan_killPolice_case,
        data.YangChengLin_EatSeafood,
    ]

    let currentYEAR = 0;

    return (
        <div style={{ overflowX: 'auto' }}>
            <River ref={ScrollRef}>
                {idlist.map((id, index) => {
                    let children = "　";

                    if (currentYEAR != id.year) {
                        currentYEAR = id.year;
                        children = currentYEAR + "";
                    }
                    return <RiverPoint 
                    key={"event" + index} id={id} children={children} focusEvent={id == focusEventID} onFocusEvent={setFocusEventID} />
                })}
            </River>
        </div>
    );

}


export default Timeline;

const River = styled.div`
        display: flex;
        //justify-content: center;
        //align-items: center;
        overflow: hidden; 
        padding-right: 7px;
        font-weight: bold;
        font-family: "微軟正黑體";
        min-width: calc(100px - 180px);
        min-height: calc(100vh - 180px);

        @media ${device.mobile} {
            min-width: calc(100vh);
            width: 100%;
            white-space: nowrap;
            overflow-x: scroll;
        }

        @media ${device.mobileL} {
            min-width: calc(100vh);
            width: 100%;
            white-space: nowrap;
            overflow-x: scroll;

        }
    `;