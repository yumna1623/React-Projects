import React from 'react';
import Header from './COMPONENTS/Headerr/Header';	        
import Footer from './COMPONENTS/Footer/Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <>
            <Header />
            <Outlet /> 
            <Footer />
        </>
    );
}

export default Layout;

{/* <Outlet /> // it means that header and  */}
            // footer will be displayed on every page and 
            // outlet will be replaced by the content of the page