import { useLocation } from "react-router-dom";
import PLANET_LIST from "../../data.json";
import { useEffect, useState } from "react";

type SubMenu = "overview" | "structure" | "surface";

function Planet() {
	const { pathname } = useLocation();
	let planet: Planet = {} as Planet;
	const [selectedSubMenu, setSelectedSubMenu] = useState<SubMenu>("overview");

	useEffect(() => {
		setSelectedSubMenu("overview");
	}, [pathname]);

	const handleSelectedSubMenu = (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
		const target = e.target as HTMLAnchorElement;
		const selectedSubMenu = target.textContent!.toLowerCase() as SubMenu;

		setSelectedSubMenu(selectedSubMenu);
	};
	// TODO: Verificar bug ao selecionar "structure" e "geology".

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

	const loadPlanetImage = () => {
		switch (selectedSubMenu) {
			case "structure":
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
										? `active bg-${planet.name}`
										: ""
								}
								onClick={(e) => handleSelectedSubMenu(e)}>
								Overview
							</a>
						</li>
						<li>
							<a
								className={
									selectedSubMenu === "structure"
										? `active bg-${planet.name}`
										: ""
								}
								onClick={handleSelectedSubMenu}>
								Structure
							</a>
						</li>
						<li>
							<a
								className={
									selectedSubMenu === "surface"
										? `active bg-${planet.name}`
										: ""
								}
								onClick={handleSelectedSubMenu}>
								Surface
							</a>
						</li>
					</ul>
				</nav>
				<div className="planet__img">
					<img src={loadPlanetImage()} alt={planet.name} />
					{selectedSubMenu === "surface" ? (
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
						<span>Radius</span> <strong>{planet.radius}</strong>
					</p>
					<p>
						<span>
							Average <abbr title="temperature">temp.</abbr>
						</span>{" "}
						<strong>{planet.temperature}</strong>
					</p>
				</div>
			</div>
		</>
	);
}
export default Planet;
