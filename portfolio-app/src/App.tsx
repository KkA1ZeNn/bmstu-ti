import './App.css'
import PortfolioPage from './components/pages/portfolioPage/portfolioPage';
import Footer from './components/pages/portfolioPage/portfolioPageFooter/portfolioPageFooter';

function App() {
  return (
    <>
      <div className='app-wrapper'>
        <PortfolioPage />
      </div>
      <Footer />
    </>
  );
}

export default App
