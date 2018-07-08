import React from 'react';
import Link from 'gatsby-link';
import { kebabCase } from 'lodash';

import github from '../img/github-icon.svg';
import logo from '../img/logo.svg';

class Navbar extends React.Component {
	constructor() {
		super();
		this.state = {
			showCollectionsDropdown: false
		};
	}
	toggleCollectionDropdown = () =>
		this.setState(oldState => ({
			showCollectionsDropdown: !oldState.showCollectionsDropdown
		}));
	render() {
		return (
			<nav className="navbar is-transparent">
				<div className="container">
					<div className="navbar-brand">
						<Link to="/" className="navbar-item">
							<figure className="image">
								{/* <img src={logo} alt="" style={{ width: '88px' }} /> */}
								<h1>Robin Leanse</h1>
							</figure>
						</Link>
					</div>
					<div className="navbar-start">
						<Link className="navbar-item" to="/about">
							About
						</Link>
						<div
							className="navbar-item"
							onClick={this.toggleCollectionDropdown}
						>
							Collections
						</div>
						{this.state.showCollectionsDropdown ? (
							<ul>
								{this.props.collections.map(collection => (
									<li>
										<Link
											to={`/collections/${kebabCase(
												collection
											)}`}
										>
											{collection}
										</Link>
									</li>
								))}
							</ul>
						) : null}
					</div>
					<div className="navbar-end">
						<a
							className="navbar-item"
							href="https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span className="icon">
								<img src={github} alt="Github" />
							</span>
						</a>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;

// should probably have the collections query here rather than in the layout component
