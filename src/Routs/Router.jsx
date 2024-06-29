import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddTouristSpot from "../Pages/AddTouristSpot/AddTouristSpot";
import TouristSpotDetails from "../Components/TouristSpot/TouristSpotDetails";
import AllTouristSpots from "../Pages/AllTouristSpots/AllTouristSpots";
import MyList from "../Pages/MyList/MyList";
import UpdateTouristSpot from "../Pages/UpdateTouristSpot/UpdateTouristSpot";
import PrivateRoute from "./PrivateRoute";
import SpecificCountries from "../Components/SpecificCountries/SpecificCountries";


const router = createBrowserRouter([
      {
            path: '/',
            element: <MainLayout />,
            errorElement: <ErrorPage />,
            children: [
                  {
                        path: '/',
                        element: <Home />
                  },
                  {
                        path: '/addTouristSpot',
                        element: <PrivateRoute><AddTouristSpot /></PrivateRoute>
                  },
                  {
                        path: '/allTouristSpots',
                        loader: () => fetch('http://localhost:5000/touristSpots'),
                        element: <AllTouristSpots />
                  },
                  {
                        path: '/myList',
                        element: <PrivateRoute><MyList /></PrivateRoute>
                  },
                  {
                        path: '/touristSpotDetails/:id',
                        loader: ({ params }) => fetch(`http://localhost:5000/touristSpotDetails/${params.id}`),
                        element: <PrivateRoute><TouristSpotDetails /></PrivateRoute>
                  },
                  {
                        path: '/specificCountry/:countryName',
                        loader: ({ params }) => fetch(`http://localhost:5000/touristSpots/specificCountry/${params.countryName}`),
                        element: <SpecificCountries />
                  },
                  {
                        path: '/updateTouristSpot/:id',
                        loader: ({ params }) => fetch(`http://localhost:5000/touristSpotDetails/${params.id}`),
                        element: <PrivateRoute><UpdateTouristSpot /></PrivateRoute>
                  },
                  {
                        path: '/register',
                        element: <Register />
                  },
                  {
                        path: '/login',
                        element: <Login />
                  }
            ]
      }
]);

export default router;