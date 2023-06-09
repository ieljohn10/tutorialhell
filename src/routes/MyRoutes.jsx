import { useRoutes } from "react-router-dom";
import Splash from "../pages/Splash";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import BlankPage from "../pages/BlankPage";
import Verification from "../pages/verfication";

const MyRoutes = () => {
	const routes = useRoutes([
		{
			path : '/',
			element : <Splash />
		},
		{
			path : '/login',
			element : <Login />
		},
		{
			path : '/signup',
			element : <SignUp />
		},
		{
			path : '/home',
			element : <Home />
		},
		{
			path : '/verification',
			element : <Verification />
		},
		{
			path : '*',
			element : <BlankPage />
		}
	]);
	
	return routes;
}

export default MyRoutes;