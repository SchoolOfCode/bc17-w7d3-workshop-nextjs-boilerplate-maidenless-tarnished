import "./App.css";
import Footer from "./componets/Footer/Footer.jsx";
import Header from "./componets/Header/Header.jsx";
import Main from "./componets/Main/Main.jsx";

let headerName = ["🔥 FirePlace", "🌊 WaterPlace"]

function App() {
  return (
    <>
      { headerName.map( place => <Header title={place} />)}
      <Main />
      <Footer />
    </>
  );
}

export default App;
