import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Outlet, useLocation, BrowserRouter } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Timeline from './components/timeline';


// 事件彙整頁面

interface EventTrainStates {

}

interface EventTrainProps {

}

export function useHorizontalScroll() {
	const Rif = useRef(null); // 設定存取方法的變數 Rif
	useEffect(() => { // useEffect 直接偵測變化對 dom元素 進行操作，所以需要一個 useRef 跟蹤狀況
		const obj = Rif.current; //新增變數 obj ，設定為 Rif 的初始值
		if (obj) {  // 如果值存在

			const onWheel = function (obj: any) { // 新增函式 onWhell()，接收值 obj
				if (obj.deltaY == 0) { //如果 obj 的滑鼠滾動值不變（deltaY是一種用戶輸入判斷，偵測滑鼠滾輪的使用，因為式判斷滾輪上下所以是Y）
					return; //  中止條件式
				}
				else { //如果 obj 的值變化
					obj.scrollTo({
						left: obj.scrollLeft += obj.deltaY,
						behavior: 'smooth',
					});
				}
				//obj.addEventListener("Wheel", obj.onWheel);
				obj.addEventListener('wheel', obj.onWheel);
				return () => obj.removeEventListener("wheel", onWheel);
			}

		}
	}, []);

	return Rif;
}

export class EventTrain extends React.Component<EventTrainProps, EventTrainStates> {

	constructor(props: EventTrainProps) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<Header />
				<Timeline />
				<Footer />
			</div>
		);
	}
}

export default EventTrain;