import { Route, Routes } from "react-router-dom";
import Feed from "./pages/Feed";
import Login from "./pages/Login";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route index element={<Feed />} />
      </Routes>
    </div>
  );
};

export default App;
