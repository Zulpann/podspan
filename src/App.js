import './App.css';
import Navigation from './components/navigation';
import Header from './components/header';
import Seacrh from './components/search';
import Popouar from './components/popular';
import Categories from './components/categories';
import Topsong from './components/topsong';

function App() {
  return (
    <div className="body">
      <Navigation />
      <Header />
      <Seacrh />
      <Popouar />
      <Categories />
      <Topsong />
    </div>
  );
};

export default App;