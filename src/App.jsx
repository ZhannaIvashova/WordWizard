import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header/Header.jsx';
import { Wordlist } from './components/Wordlist/Wordlist.jsx';
import { Footer } from './components/Footer.jsx';
import './index.css';


function App() {
  return (
    <Router>
      <>
        <Header />
        <Wordlist />
        <Footer />
      </>
    </Router>
  );
}

export default App;
