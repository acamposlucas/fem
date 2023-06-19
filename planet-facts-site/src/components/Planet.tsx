import { useLocation } from "react-router-dom";
import PLANET_LIST from "../../data.json";

function Planet() {
	const { pathname } = useLocation();
	let planet: Planet = {} as Planet;

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
							<a href="#">Overview</a>
						</li>
						<li>
							<a href="#">Structure</a>
						</li>
						<li>
							<a href="#">Surface</a>
						</li>
					</ul>
				</nav>
				<div className="planet__img">
					<img src={planet.images.planet} alt={planet.name} />
				</div>
				<div className="planet__content container">
					<h1 className="">{planet.name}</h1>
					<div>
						<p>{planet.overview.content}</p>
						<p className="source">
							Source:{" "}
							<a href={planet.overview.source}>Wikipedia</a>
						</p>
					</div>
				</div>
				<div className="planet__details container">
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
