import {Link} from 'react-router-dom'
export default function Navbar() {
	return (
		<div className="navbar">
			<nav>
				<ul className="inline">
					<li><Link to="/">Home</Link></li>
					<li><Link to="/contato">Contato</Link></li>
					<li><Link to="/novoprojeto">Novo Projeto</Link></li>
				</ul>
			</nav>
		</div>
	)
}