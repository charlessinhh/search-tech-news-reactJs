//context creation
//provider
//useContext hook

//context creation
import { useContext, useReducer ,useEffect} from "react";
import React from "react";
import reducer from "./reducer";

let API = "https://hn.algolia.com/api/v1/search?";

const initialState = {
  isLoading : true ,
  query : '',
  nbPages : 0,
  page : 0,
  hits: [],
};

const AppContext = React.createContext();

//create a provider function

const AppProvider = ({children}) => {

  // const [state, setstate] = useState(initialState);
  const [state, dispatch] = useReducer(reducer,initialState);


  const fetchApiData = async (url) => {

    dispatch({type : "SET_LOADING" });

    try {
      const response = await fetch(url)
      const data = await response.json();
      console.log(data);
      dispatch( { 
        type:"GET_POSTS",
        payload : {
          hits: data.hits,
          nbPages: data.nbPages,

        },
    });
       
    } catch (error) {
      console.log(error);
      
    }
  };

  //to remove the post
  const removePost = (post_ID) => {
    dispatch({type : "REMOVE_POST", 
    payload : post_ID,
  });
  };

  //search
  const searchPost = (searchQuery) => {
    dispatch({
      type: "SEARCH_QUERY",
      payload : searchQuery,
    });
  };


  //pagination
  const getNextPage = () => {
    dispatch ({
      type: "NEXT_PAGE",

    });
  };

  const getPrevPage = () => {
    dispatch({
      type: "PREV_PAGE",
    });
  };


// TO Call api function
  useEffect(() => {
    fetchApiData(`${API}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  return(
    <AppContext.Provider value={ {...state , removePost ,searchPost,getNextPage,getPrevPage} }>
      {children}
    </AppContext.Provider>
  );
}; 


//custom hook create
const useGlobalContext = () => {
  return useContext(AppContext);
}


export { AppContext, AppProvider , useGlobalContext};