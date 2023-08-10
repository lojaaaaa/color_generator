import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

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
      <Main generateRandomColor={generateRandomColor}/>
      <Footer />
    </div>
  );
}

export default App;
