import React from "react";
import AddBord from "../Components/AddBord";
import BordList from "../Components/BordList";
import "./App.css";

function App() {
  return (
    <div className="App bg-gradient-to-r from-green-400 to-blue-300 w-full min-h-screen">
      {/* terllor add bord header start */}
      <AddBord />
      {/* terllor add bord header end */}

      {/* terllor bord card  start */}
      <BordList />
      {/* terllor bord card  end */}
    </div>
  );
}

export default App;
