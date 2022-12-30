import { RouterProvider } from "react-router-dom";
import "./App.css"
import Auth from "./pages/Auth/Auth";

import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";
import router from "./Routes/Routes/Routes";
function App() {
  return (
    <div className="App">
      <div className="blur" style={{ top: '-18%', right: '0' }}></div>
      <div className="blur" style={{ top: '36%', left: '-8rem' }}></div>
      {/* <Home /> */}
      {/* <Profile /> */}
      {/* <Auth /> */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
