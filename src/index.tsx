import React from 'react';
import { useEffect } from "react";
import { useLayoutEffect } from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Outlet, useLocation, BrowserRouter, HashRouter  } from 'react-router-dom';
import Home from './pages/home/home'
import Footer from './components/Footer';
import AboutSite from './pages/footer/aboutsite';
import EventTrain from './pages/event/eventtrain';
import { App } from './App';
import Planning from './pages/footer/planning';


const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

export default function ScrollToTop({ children }:{children:any}) {
	const { pathname } = useLocation();
	
	useEffect(() => {
	  const canControlScrollRestoration = 'scrollRestoration' in window.history
	  if (canControlScrollRestoration) {
		window.history.scrollRestoration = 'manual';
	  }
  
	  window.scrollTo(0, 0);
	}, [pathname]);
	
	return children;
  }

// 主要渲染
root.render(
	<React.StrictMode>
		<HashRouter>
			<ScrollToTop children={null}/>
			
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/eventtrain' element={<EventTrain />}></Route>
				<Route path='/aboutsite' element={<AboutSite />}></Route>
				<Route path='/Planning' element={<Planning />}></Route>
			</Routes>
		</HashRouter>
	</React.StrictMode>
);



