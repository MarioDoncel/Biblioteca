import {
    HashRouter, // or // BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  import {Page1, Page2} from '../pages/index';


  export const Router = ()=>{
    return(
      <HashRouter> 
        <Routes>
          <Route path="/" element={< Page1 />}/>
          <Route path="/Page2" element={<Page2 />}/>
        </Routes>
      </HashRouter>
    )
  }

  export default Router
  