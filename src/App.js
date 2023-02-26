import './App.css';
import Navigation from './components/navigation';
import Header from './components/header';
import Seacrh from './components/search';
import Popouar from './components/popular';

function App() {
  return (
    <div className="body">
      <Navigation />
      <Header />
      <Seacrh />
      <Popouar />
    </div>
  );
};

export default App;