import Sales from './Components/Sales';
import Categories from './Components/Categories';
import Navbar from './Components/Navbar';
import Popular from './Components/Popular';
import Recommended from './Components/Recommended';
import Topic from './Components/Topic';
import Footer from './Components/Footer';

function App(){
    return(
        <div>
  <Navbar></Navbar>
  <Categories></Categories>
  <Sales></Sales>
  <Recommended></Recommended>
  <Topic></Topic>
  <Popular></Popular>
  <Footer></Footer>
  </div>
    )
}

export default App