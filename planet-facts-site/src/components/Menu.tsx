import PLANET_LIST from "../../data.json";

function Menu() {
	console.log(PLANET_LIST);
	return (
		<nav className="menu">
			<ul>
				{PLANET_LIST.map(({ name }) => {
					return (
						<li key={name}>
							<a href="#">
								{name}{" "}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="6"
									height="8">
									<path
										fill="none"
										stroke="#FFF"
										opacity=".4"
										d="M1 0l4 4-4 4"
									/>
								</svg>
							</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
export default Menu;
