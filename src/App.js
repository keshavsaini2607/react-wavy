import React from "react";
import {
   BrowserRouter,
   Routes,
   Route,
   Outlet,
   useLocation,
} from "react-router-dom";

import { WavyContainer, WavyLink } from "react-wavy-transitions";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";

const App = () => {
   return (
      <BrowserRouter>
         <WavyContainer />
         <Routes>
            <Route
               path="/"
               element={
                  <>
                     <div className="h-[8vh] space-x-10 flex justify-center w-full bg-[#EDE4E0]">
                        <WavyLink to="/" color="#FF731D">
                           <p className="font-bold">Home</p>
                        </WavyLink>
                        <WavyLink to="/about" color="#749F82">
                           <p className="font-bold">About</p>
                        </WavyLink>
                        <WavyLink to="/contact" color="#D58BDD">
                           <p className="font-bold">Contact</p>
                        </WavyLink>
                     </div>
                     <Outlet />
                  </>
               }
            >
               <Route index element={<Home />} />
               <Route path="about" element={<About />} />
               <Route path="contact" element={<Contact />} />
               <Route path="*" element={<>No Match</>} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
};

export default App;
