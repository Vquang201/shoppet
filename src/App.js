import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home';
import Dogs from './Components/ProductList/Dogs';
import Cats from './Components/ProductList/Cats';
import Carts from './Components/Cart/Carts';
import Navbar from './Components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import { fetchV1Dogs, fetchV1Cats } from './API';
import { Context } from './ContextApi/Context';
import SearchPet from './Components/SearchPet/SearchDogs';
import SearchCats from './Components/SearchPet/SearchCats';
import Footer from './Components/Footer/Footer';
import ProductDes from './Components/ProductDes/ProductDes';


function App() {
  const [listDogs, setListDogs] = useState([])
  const [listCats, setListCats] = useState([])
  const [valueInput, setValueInput] = useState('')
  const [renderSortPrice, setrenderSortPrice] = useState()
  const [listProductDes, setListProductDes] = useState([])
  // const [saveProduct, setSaveProduct] = useState((() => {
  //   const storageProducts = JSON.parse(localStorage.getItem('products'))
  //   return storageProducts
  // }) ?? [])

  const [saveProduct, setSaveProduct] = useState([])
  const [countProduct, setCountProduct] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    // axios.get('/v1/dogs')
    //   .then(res => setListDogs(res.data))
    // // lấy data dogs


    // axios.get('/v1/cats')
    //   .then(res => setListCats(res.data))
    // //lấy data cats

    const fetchProductList = async () => {
      try {
        const resDogs = await fetchV1Dogs();
        setListDogs(() => resDogs.data)
        console.log(listDogs)

        // lấy cats
        const resCats = await fetchV1Cats();
        setListCats(resCats.data)
        console.log(listCats)

      } catch (error) {
        console.log('Failed to fetch product list: ', error);
      }
    }

    fetchProductList()
  }, [])

  return (
    <Context.Provider value={{
      listDogs,
      setListDogs,
      listCats,
      setListCats,
      listProductDes,
      setListProductDes,
      valueInput,
      setValueInput,
      setSaveProduct,
      saveProduct,
      total,
      setTotal,
      countProduct,
      setCountProduct,
      setrenderSortPrice

    }}>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dogs' element={<Dogs />} />
          <Route path='/dogs/search/:keyword' element={<SearchPet />} />
          <Route path='/cats/search/:keyword' element={<SearchCats />} />
          <Route path='/product/description' element={<ProductDes />} />
          <Route path='/cats' element={<Cats />} />
          <Route path='/carts' element={<Carts />} />
        </Routes>
      </div>
      <Footer />
    </Context.Provider>
  );
}

export default App;
