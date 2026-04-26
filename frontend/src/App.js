
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { ContentArea } from './components/ContentArea';
import { Header } from './components/Header';
import { Menubar } from './components/Menubar';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

   const [products, setProducts] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    fetchAll();
  }, []);

   const fetchAll = async () => {
    const [p, s, pu] = await Promise.all([
      axios.get("http://localhost:8081/api/product"),
      axios.get("http://localhost:8081/api/supplier"),
      axios.get("http://localhost:8081/api/purchase"),
    ]);

    setProducts(p.data);
    setSuppliers(s.data);
    setPurchases(pu.data);
  };
  return (
    <div  >
     <BrowserRouter>
   
        <Header/>

        <div style={{display:"flex"}}>
          <Menubar/>
          <ContentArea products={products} suppliers={suppliers} purchases={purchases}/>
        </div>
        
        </BrowserRouter>
    </div>
  );
}

export default App;
