import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Planet from "./components/Planet";
import Root from "./components/Root";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "/:planetName",
				element: <Planet />,
			},
		],
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
