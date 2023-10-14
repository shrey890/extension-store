import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
const Header = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid">
				<Link className="navbar-brand" to='/'>Extension</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link" aria-current="page" to='/'>Home</Link>
						</li>
						<li className="nav-item">
							<button type='button' className='btn '>
							<a href="https://github.com/shrey890/extension"  rel='noreferrer' target='_blank'>Download</a>
							</button>
						</li>


					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Header