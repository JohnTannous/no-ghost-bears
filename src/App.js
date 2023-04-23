import { About, Favorites, Gallery, Header, Menu, Footer } from './container';
import { Navbar } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Favorites />
      <Menu />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
