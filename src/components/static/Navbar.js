import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom'
import Home from '../views/Home'

export default function Navbar() {
	return (
		<div className="navbar">
			<nav>
				<ul className="inline">
					<Router>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/contato">Contato</Link></li>
						<Routes>
							<Route exact path='/' element={<Home />} />
						</Routes>
					</Router>
				</ul>
			</nav>
		</div>
	)
}