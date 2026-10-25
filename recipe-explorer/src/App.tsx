import "./App.css";
import { Routes, Route } from "react-router";
import { HomePage } from "./pages/HomePage.tsx";
import { RecipeListPage } from "./pages/RecipeListPage.tsx";
import { CategoryListPage } from "./pages/CategoryListPage.tsx";
import { RecipeDetailPage } from "./pages/RecipeDetailPage.tsx";
import { Layout } from "./components/Layout.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/search" element={<RecipeListPage />} />
          <Route path="/categories" element={<CategoryListPage />} />
          <Route path="/categories/:id" element={<RecipeListPage />} />
          <Route path="/recipe/:id" element={<RecipeDetailPage />} />
          <Route path="/favorites" element={<RecipeListPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
