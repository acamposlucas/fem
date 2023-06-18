import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Menu from "./Menu";

function Header() {
	const [showMenu, setShowMenu] = useState(false);

	let location = useLocation();

	useEffect(() => {
		setShowMenu(false);
	}, [location]);

	function handleOpenMenu() {
		setShowMenu((state) => !state);
	}

	return (
		<header>
			<div className="main__header container">
				<h1>The Planets</h1>
				<button type="button" onClick={handleOpenMenu}>
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
				<div
					className="header__menu__container"
					data-visible={showMenu}
					aria-hidden={!showMenu}>
					<Menu />
				</div>
			</div>
		</header>
	);
}
export default Header;
