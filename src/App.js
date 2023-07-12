import './App.css';
import Filter from './components/FIlters/Filter';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Main from './components/Body';

function App() {
  return (
    <div className="App">
      <div className="wrapper" style={{position:'relative'}}>
        <div className='nav_wrapper'>
          <div style={{width:'80%',textAlign:'center',margin:'auto', paddingBottom:'20px'}}>
            <Header />
          </div>
          <div style={{margin:'30px auto', paddingTop:'20px', borderTop:'1px solid #eeeeee'}}>
            <Filter />
          </div>
        </div>
          <div className='main_body'>
            <Main />
          </div>
      </div>
       <div className='nav_footer'>
          <Footer />
        </div>
    </div>
  );
}

export default App;
