import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import ShopLayout from "./pages/ShopLayout.jsx";


function App(){
  return(
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/shop/*" element={<ShopLayout />} />
    </Routes>
  );

}

export default App;