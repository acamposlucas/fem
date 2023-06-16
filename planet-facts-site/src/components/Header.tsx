import Menu from "./Menu";

function Header() {
	return (
		<header>
			<div className="main__header container">
				<h1>The Planets</h1>
				<button type="button">
					<span className="visually-hidden">Toggle navigation</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="17">
						<g fill="#FFF" fillRule="evenodd">
							<path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
						</g>
					</svg>
				</button>
				<div className="header__menu__container">
					<Menu />
				</div>
			</div>
		</header>
	);
}
export default Header;
