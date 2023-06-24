import { useLocation, useNavigate } from "react-router-dom";
import Layout from "./Layout";
import { useEffect } from "react";

function Root() {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	useEffect(() => {
		if (pathname === "/") {
			navigate("/Earth");
		}
	}, []);

	return <Layout />;
}
export default Root;
