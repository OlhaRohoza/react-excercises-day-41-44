import logo from './logo.svg';
import './App.css';
import './Componets/Header';
import { Header } from './Componets/Header';
import { Footer } from './Componets/Footer';
import { ProductList } from './Componets/ProductList';
import { UserInfo } from './Componets/UserInfo';
import { Search } from './Componets/Search';

function App() {
  return (
    <div id="page">

      <Header />


      <div id="main">
        <Search />


        <div className="content">
          <h1>Products</h1>

          <ProductList />

        </div>

      </div>

      <Footer />


    </div>
  );
}

export default App;
