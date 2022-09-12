import React from 'react';
import { useRef, useEffect } from "react";
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';
import data from "../eventData";

interface TimelineStates {

}

interface TimelineProps {

}



export class Timeline extends React.Component<TimelineProps, TimelineStates> {

    constructor(props: TimelineProps) {
        super(props);
        this.state = {};
    }

    readonly river = styled.div`
        overflow-y: scroll;
        padding-right: 7px;

        &::-webkit-scrollbar {
            display: none;
        }
    `;

    readonly event = styled.div`
        width: 2000px;
        height: 2000px;

        font-weight: bold;
		font-family: "微軟正黑體";
        font-size: 50px;
    `;
    readonly timePoint = styled.div`
        
    `;
    readonly ageYear = styled.div`
        
    `;
    readonly ageMonth = styled.div`
        
    `;
    readonly title = styled.div`
        
    `;

    render() {
        return (
            <div>
                <this.river>
                    <this.event>
                        123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123
                        <this.ageYear>
                            
                        </this.ageYear>

                        <this.ageMonth>

                        </this.ageMonth>

                        <this.timePoint>

                        </this.timePoint>

                        <this.title></this.title>
                    </this.event>
                </this.river>
            </div>
        );
    }
}
