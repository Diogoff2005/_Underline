import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import Reviews from "./pages/Reviews";
import Wishlist from "./pages/Wishlist";

function App() {
  //Routes
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie-details" element={<MovieDetails />}>
          <Route path=":id" element={<MovieDetails />} />
        </Route>
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
