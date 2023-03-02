import React from 'react';
import Product from '../components/Product'
import Header from '../components/Header'

const Layout = (props) => {
    return (
        <div className="main-container">
            <header className="header">
                
                <Header props={props.products} dater={props.dater} />
            </header>
            <div className="body">
                <div className="page-content">
                    <Product props={props.products} />
                </div>
            </div>
            <footer className="footer">Footer</footer>
        </div>
    )
}
export default Layout;