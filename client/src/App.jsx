import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";

export default function App() {
  return (
    <Routes>
      <Route index element={<HomePage/>}></Route>
      <Route path="/create" element={<CreatePage/>}></Route>
      <Route path="/edit" element={<EditPage/>}></Route>
    </Routes>
  )
}