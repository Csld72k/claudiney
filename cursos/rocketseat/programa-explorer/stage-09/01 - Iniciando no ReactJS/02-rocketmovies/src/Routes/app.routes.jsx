import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { MovieDetails } from "../pages/MovieDetails";
import { NewMovie } from "../pages/NewMovie";
import { Profile } from "../pages/Profile";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie-details/:id" element={<MovieDetails />} />
      <Route path="/new-movie" element={<NewMovie />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}