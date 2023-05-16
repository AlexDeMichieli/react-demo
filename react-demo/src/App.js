import "./App.css";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";

const App = () => {

  const links = [
    { name: "Google", link: "https://www.google.com" },
    { name: "Yahoo", link: "https://www.yahoo.com/" },
    { name: "Amazon", link: "https://www.amazon.com/" },
  ];

  const sayHello = () => {
    console.log('hello')
  }

  return (
    <div>
      <Nav links={links} sayHello={sayHello} />
      <Footer />
    </div>
  );
};

export default App;
