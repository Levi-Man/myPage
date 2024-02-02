// import { useState } from 'react';
import NavTabs from './NavTabs';
import '../App.css'

function Header() {
    // const [currentPage, setCurrentPage] = useState('About');
return (
<><header className="header">
<div className="name-and-logo"><h1 className="name">Indra Manahan</h1>
<img src="/logo.png" alt="Logo" className="logo" />
</div><NavTabs />
</header></>
)
}

export default Header;