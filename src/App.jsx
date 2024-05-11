import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
	HomeLayout,
	Landing,
	Register,
	DasboardLayout,
	Login,
	Error,
} from "./pages";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		// errorElement:<Error/>
		children: [
			{
				index: true,
				element: <Landing />,
			},
			{
				path: "register",
				element: <Register />,
			},
			{
				path: "login",
				element: <Login />,
			},
			{
				path: "dashboard",
				element: <DasboardLayout />,
			},
			{
				path: "*",
				element: <Error />,
			},
		],
	},
]);

const App = () => {
	return <RouterProvider router={router}>Jobify Application</RouterProvider>;
};
export default App;
