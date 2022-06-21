import React, {useState} from "react";
import Me from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Navigation from "./Nav";



export default function App() {
    const [currentPage, setCurrentPage] = useState("About Me");

    const renderPage = () => {
        switch(currentPage) {
         case "About Me":
        return <Me/>;
            case "Portfolio":
                return <Portfolio />;
                 case "Contact":
                    return <Contact />;
                     case "Resume":
                        return <Resume />;
                         default:
                        return <Portfolio />;
        }
    };
   const switchPage = (page) => setCurrentPage(page);

    return (
        <div className="main">
           <Navigation currentPage={currentPage} handlePageChange={switchPage} />
                {renderPage()}
          
        </div>

    );
}