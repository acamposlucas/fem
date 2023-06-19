import { useLocation } from "react-router-dom";
import PLANET_LIST from "../../data.json";
import { useState } from "react";

type SubMenu = "overview" | "structure" | "surface";

function Planet() {
	const { pathname } = useLocation();
	let planet: Planet = {} as Planet;
	const [selectedSubMenu, setSelectedSubMenu] = useState<SubMenu>("overview");

	const handleSelectedSubMenu = (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
		const target = e.target as HTMLAnchorElement;
		const selectedSubMenu = target.textContent!.toLowerCase() as SubMenu;

		setSelectedSubMenu(selectedSubMenu);
	};

	const loadPlanetContents = () => {
		switch (selectedSubMenu) {
			case "overview":
				return planet.overview;
			case "structure":
				return planet.structure;
			case "surface":
				return planet.geology;
		}
	};

	const loadPlanet = () => {
		planet = PLANET_LIST.find(
			(planet) => planet.name === pathname.slice(1)
		) as Planet;
	};
	loadPlanet();

	return (
		<>
			<div className="planet__grid">
				<nav className="planet__menu">
					<ul>
						<li>
							<a
								className={
									selectedSubMenu === "overview"
										? "active"
										: ""
								}
								href="#"
								onClick={(e) => handleSelectedSubMenu(e)}>
								Overview
							</a>
						</li>
						<li>
							<a
								className={
									selectedSubMenu === "structure"
										? "active"
										: ""
								}
								href="#"
								onClick={handleSelectedSubMenu}>
								Structure
							</a>
						</li>
						<li>
							<a
								className={
									selectedSubMenu === "surface"
										? "active"
										: ""
								}
								href="#"
								onClick={handleSelectedSubMenu}>
								Surface
							</a>
						</li>
					</ul>
				</nav>
				<div className="planet__img">
					<img src={planet.images.planet} alt={planet.name} />
				</div>
				<div className="planet__content">
					<h1 className="">{planet.name}</h1>
					<div>
						<p>{loadPlanetContents().content}</p>
						<p className="source">
							Source:{" "}
							<a href={loadPlanetContents().source}>Wikipedia</a>
						</p>
					</div>
				</div>
				<div className="planet__details">
					<p>
						<span>Rotation time</span>{" "}
						<strong>{planet.rotation}</strong>
					</p>
					<p>
						<span>Revolution time</span>{" "}
						<strong>{planet.revolution}</strong>
					</p>
					<p>
						<span>Radius</span> <strong>{planet.revolution}</strong>
					</p>
					<p>
						<span>
							Average <abbr title="temperature">temp.</abbr>
						</span>{" "}
						<strong>{planet.revolution}</strong>
					</p>
				</div>
			</div>
		</>
	);
}
export default Planet;
