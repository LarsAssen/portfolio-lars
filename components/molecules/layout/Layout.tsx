import React from 'react';
import Nav from '../navigation/Navbar';
import Footer from '../footer/Footer';

const Layout: React.FC<{children: any}> = ({children}) => {
    return (
        <div>
            {/* <Meta title="The Running Explorer" keywords="ultrarunning, books, habits, travel" description="Everything about ultra running, health and self improvement. Learn all about how to become your best self." /> */}
            <Nav/>
            <div>
                <main>
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default Layout