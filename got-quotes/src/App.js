import logo from './logo.svg';
import './App.css';
import QuoteCard from './components/QuoteCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Game of Thrones Quotes</h1>
       <QuoteCard />
      </header>
    </div>
  );
}

export default App;
