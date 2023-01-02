import * as React from 'react';
import './App.css';
import Header from './Header'; // reference from jsx
//import Content from './Content'; // reference from jsx
import Footer from './Footer'; // reference from jsx
import Employees from './Employees';

function App() {  
  return (
    <main>
      <Header />
      <Employees />
      <Footer />
    </main>
  );
}

export default App
