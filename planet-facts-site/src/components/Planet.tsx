import { useLocation } from "react-router-dom";
import PLANET_LIST from "../../data.json";
import { useState } from "react";

type SubMenu = "overview" | "internal structure" | "surface geology";
type Images = "planet" | "internal" | "geology";

function Planet() {
	const { pathname } = useLocation();
	let planet: Planet = {} as Planet;
	const [selectedSubMenu, setSelectedSubMenu] = useState<SubMenu>("overview");
	const [selectedImage, setSelectedImage] = useState<Images>("planet");

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
			case "internal structure":
				return planet.structure;
			case "surface geology":
				return planet.geology;
		}
	};

	const loadPlanetImage = () => {
		switch (selectedSubMenu) {
			case "internal structure":
				return planet.images.internal;
			default:
				return planet.images.planet;
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
								onClick={(e) => handleSelectedSubMenu(e)}>
								Overview
							</a>
						</li>
						<li>
							<a
								className={
									selectedSubMenu === "internal structure"
										? "active"
										: ""
								}
								onClick={handleSelectedSubMenu}>
								Internal Structure
							</a>
						</li>
						<li>
							<a
								className={
									selectedSubMenu === "surface geology"
										? "active"
										: ""
								}
								onClick={handleSelectedSubMenu}>
								Surface Geology
							</a>
						</li>
					</ul>
				</nav>
				<div className="planet__img">
					<img src={loadPlanetImage()} alt={planet.name} />
					{selectedSubMenu === "surface geology" ? (
						<div className="planet__img__geology">
							<img src={planet.images.geology} />
						</div>
					) : null}
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
