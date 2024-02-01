import './App.css';
// import PortfolioContainer from './components/PortfolioContainer';
import Footer from './components/Footer'
import Header from './components/Header'
import { Outlet } from 'react-router-dom';

function App() {

  return (
      <div className="react-folio app-wrapper">
        <Header />
        <main className="main-container">
          {/* <PortfolioContainer /> */}
        <Outlet />
      </main>
      <Footer />
    </div>
    
  );
}

export default App;
