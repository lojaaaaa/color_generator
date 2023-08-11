import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Home from "./pages/Home";
import Create from "./pages/Create/Create";
import Info from "./pages/Info/Info";

function App() {



  const generateRandomColor = () => {
      const hexCode = '0123456789ABCDEF'
      let color = ''
      for (let i = 0; i < 6; i++){
          color += hexCode[Math.floor(Math.random() * hexCode.length)]
      }
      return '#' + color
  }



  return (
    <div className="wrapper">
      <Header/>
      <main className="main">
        <div className="main__container container">
          <Routes>
            <Route path='/' element={<Home generateRandomColor={generateRandomColor}/>}/>
            <Route path='/create' element={<Create />}/>
            <Route path='/info' element={<Info />}/>
          </Routes>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
