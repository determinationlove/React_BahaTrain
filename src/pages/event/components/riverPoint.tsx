import React from 'react';
import { useRef, useEffect } from "react";
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';
import data from "../eventData";
import EventBlock from './eventBlock';

interface RiverPointStates {
    focus: boolean;
    open: boolean;
}

interface RiverPointProps {
    id: any;
    children: React.ReactNode;
}

export class RiverPoint extends React.Component<RiverPointProps, RiverPointStates> {

    constructor(props: RiverPointProps) {
        super(props);
        this.state = {
            focus: false,
            open: false
        };
    }

    readonly Event = styled.div`
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        flex-flow: column;
        width: 20%;
        height: 20%;
        font-weight: bold;
        font-family: "微軟正黑體";
        font-size: 25px;
        white-space: nowrap; 
        margin: 5%;
    `;
    readonly AgeYear = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column;
        font-size: 25px;
        //padding: 5%;
    `;
    readonly lineDot = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;

        margin: 20%;
    `;
    readonly dot = styled.div`
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
    readonly LineHR = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: -1;
        width: 999px;

        border-bottom: 1px solid red;
        //padding-bottom: 10%;
    `;
    readonly Title = styled.div`
        display: inline-block;
        margin-top: 25%;
        //padding: 50%;
    `;
    readonly back = styled.img`
        display: flex;
        position: absolute;
        z-index: 1;
        justify-content: right;
        align-items: flex-start;
        width: 10%;
        height: 10%;
    `;



    render() {
        return (
            <this.Event>
                <this.AgeYear>{this.props.children}</this.AgeYear>
                <this.Title onClick={() => this.setState({ focus: true, open: true })}>
                    {this.props.id.title}
                </this.Title>
                <this.lineDot>
                    <this.dot />
                    <this.LineHR />
                </this.lineDot>
                {
                    /*
                    this.state.focus == true && (
                        <div>
                            <EventBlock eventCode={this.props.id} />

                            <this.back src='img/cancel.png'
                                onClick={() => this.setState({ open: false })}/>
                        </div>

                    )
                    */
                    this.state.focus ? 
                        <EventBlock eventCode={this.props.id} 
                        children={this.back}/>
                    :
                    null
                }
            </this.Event>
        );
    }
}

export default RiverPoint;