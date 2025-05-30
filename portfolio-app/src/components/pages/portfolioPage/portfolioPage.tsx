import Header from "./portfolioPageHeader/portfolioPageHeader";
import Main from "./portfolioPageMain/portfolioPageMain";
import './portfolioPage.css'

const PortfolioPage = () => {
    return (
        <>
            <header id="header"><Header /></header>
            <main id="main"><Main /></main>
        </>
    );
};

export default PortfolioPage;