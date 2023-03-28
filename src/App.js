import logo from './logo.svg';
import './App.css';

//import components
import { Header } from './components/Header';
import { Summary } from './components/AccountSummary';
import { History } from './components/AccountHistory';
import { NewTransaction } from './components/NewTransaction';
import { GlobalContext } from './context/GlobalContext';

function App() {
  return (
    <div className='Container'>
      <GlobalContext>
      <Header/>
      <Summary/>
      <History/>
      <NewTransaction/>
      </GlobalContext>
    </div>
  );
}

export default App;
