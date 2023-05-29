import {Link} from 'react-router-dom'
import Container from '../layouts/Container'
import logo from '../../img/costs_logo.png'
import style from './navbar.module.css'

export default function Navbar() {
	return (
		<nav className={style.navbar}>
			<Container>
				<Link to='/'>
					<img src={logo} alt="" />
				</Link>
				<ul className={style.list}>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/contato">Contato</Link></li>
					<li><Link to="/projeto">Projetos</Link></li>
				</ul>
			</Container>
		</nav>
	)
}