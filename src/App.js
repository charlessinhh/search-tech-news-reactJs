
import './App.css';
import './background.jpg'
import Pagination from './pages/Pagination';
import Search from './pages/Search';
import Posts from './pages/Posts';


const App = () => {
  // const data = useContext(AppContext);
  // const data = useGlobalContext();

  return (
      <>
        <Search/>
        <div><h2>📰</h2></div>
        <Posts/>
        <Pagination/>
      </>
  );
}

export default App;
