import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Search from "./components/Search";
import HomepageBody from "./components/HomepageBody";


const App=()=>{
  // console.log(hello);
  return(
    <div>
      <Header/>
      <Search/>
      <HomepageBody/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementsByClassName("root")[0]);
root.render(<App/>);

