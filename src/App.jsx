import s from './App.module.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import RouterPage from './routerPage/RouterPage';

const App = () => {
  return (
    <>
      <Header />
      <RouterPage />
      <Footer />
    </>
  );
};

export default App;
