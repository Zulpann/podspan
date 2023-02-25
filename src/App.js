import './App.css';
import Navigation from './components/navigation';
import Header from './components/header';
import Seacrh from './components/search';

function App() {
  return (
    <div className="body">
      <Navigation />
      <Header />
      <Seacrh />
    </div>
  );
};

export default App;