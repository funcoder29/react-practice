import "./App.css";
import { Routes, Route, useLocation } from "react-router";
import { HomePage } from "./pages/HomePage.tsx";
import { RecipeListPage } from "./pages/RecipeListPage.tsx";
import { CategoryListPage } from "./pages/CategoryListPage.tsx";
import { RecipeDetailPage } from "./pages/RecipeDetailPage.tsx";
import { Layout } from "./components/Layout.tsx";
import { RecipeModal } from "./components/RecipeModal.tsx";

function App() {
  const location = useLocation();

  const backgroundLocation = location.state?.backgroundLocation;

  return (
    <>
      {console.log("Current:", location.pathname)}
      {console.log("Background:", backgroundLocation)}
      {/* Main page, with the previous location as background */}
      <Routes location={backgroundLocation || location}>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<RecipeListPage />} />
          <Route path="/categories" element={<CategoryListPage />} />
          <Route path="/categories/:id" element={<RecipeListPage />} />
          {!backgroundLocation && (
            <Route path="/recipe/:id" element={<RecipeDetailPage />} />
          )}
          <Route path="/favorites" element={<RecipeListPage />} />
        </Route>
      </Routes>

      {/* Overlay the recipe details when navigating from another page */}
      {backgroundLocation && (
        <Routes location={location}>
          <Route
            path="/recipe/:id"
            element={
              <RecipeModal>
                <RecipeDetailPage />
              </RecipeModal>
            }
          />
        </Routes>
      )}
    </>
  );
}

export default App;
