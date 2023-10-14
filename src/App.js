import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Error from './pages/Error'
import {
	createBrowserRouter,
	Route,
	RouterProvider,
	Routes,
} from "react-router-dom";
const App = () => {
	return (
		<div >
			<Header />
			<Routes>
				<Route path='/' element={ <Home /> } />
				<Route path='*' element={ <Error /> } />
			</Routes>
			<footer style={{textAlign:'center'}}> <a rel="noreferrer"  href="https://shreyz.vercel.app/" target='_blank'>&copy; Shrey</a> </footer>
		</div>
	)
}

export default App