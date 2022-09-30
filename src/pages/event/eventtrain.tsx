import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Outlet, useLocation, BrowserRouter } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Timeline from './components/timeline';
import { Type } from 'typescript';
import { device } from '../../device';


// 事件彙整頁面

interface EventTrainStates {

}

interface EventTrainProps {

}

export function useHorizontalScroll() {
	const Rif = useRef<any>(null); // 設定存取方法的變數 Rif
	useEffect(() => { // useEffect 直接偵測變化對 dom元素 進行操作，所以需要一個 useRef 跟蹤狀況
		const obj = Rif.current; //新增變數 obj ，設定為 Rif 的初始值
		if (obj) {  // 如果值存在
			const onWheel = (e: { deltaY: number; preventDefault: () => void; }) => {
				if (e.deltaY == 0) {
					return;
				}
				else {
					e.preventDefault();
					obj.scrollTo({
						left: obj.scrollLeft + e.deltaY,
						behavior: "smooth"
					});
				}
			};
			obj.addEventListener("wheel", onWheel);
			return () => obj.removeEventListener("wheel", onWheel);
		}
	}, []);

	return Rif;
}

export class EventTrain extends React.Component<EventTrainProps, EventTrainStates> {

	constructor(props: EventTrainProps) {
		super(props);
		this.state = {};
	}

	readonly div = styled.div`
		display: flex;
		height: 100%;
		flex-Flow: column;

		@media ${device.laptop} {
			max-width: 1920px;
		}

		@media ${device.desktop} {
			max-width: 100%;
		}
	`;

	render() {
		return (
			<this.div>
				<Header />
				<Timeline />
				<Footer />
			</this.div>
		);
	}
}

export default EventTrain;