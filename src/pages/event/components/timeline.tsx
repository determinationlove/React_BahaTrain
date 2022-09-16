import React from 'react';
import { useRef, useEffect } from "react";
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';
import data from "../eventData";
import { useHorizontalScroll } from "../eventtrain";

interface TimelineStates {

}

interface TimelineProps {

}



function Timeline () {


    const River = styled.div`
        overflow: auto;
        padding-right: 7px;
/*
        &::-webkit-scrollbar {
            display: none;
        }
        */
    `;

    const Event = styled.div`
        width: 2000px;
        height: 100px;

        font-weight: bold;
		font-family: "微軟正黑體";
        font-size: 50px;
        white-space: nowrap; 
    `;
    const TimePoint = styled.div`
        
    `;
    const AgeYear = styled.div`
        
    `;
    const AgeMonth = styled.div`
        
    `;
    const Title = styled.div`
        
    `;

    const ScrollRef = useHorizontalScroll();


        return (
            <div>
                <River ref={ScrollRef}>
                    <Event>
                        123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123
                        <AgeYear>
                            
                        </AgeYear>

                        <AgeMonth>

                        </AgeMonth>

                        <TimePoint>

                        </TimePoint>

                        <title></title>
                    </Event>
                </River>
            </div>
        );

}


export default Timeline;