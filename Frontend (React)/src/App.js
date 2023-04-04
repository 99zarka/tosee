import './App.css';
import Create from './Create';
import SignIn from './SignIn';
import { Route, Routes } from "react-router-dom"
import Card from './Card';
import About from './About';
import SideBar from './SideBar';
import Footer from './Footer';
import Info from './Info';
import Map from './Map';
import Chat from './Chat';



function App() {
  return (
    <>
      <div className="App">
        <div className="container-fluid p-0">

          <Routes>

            <Route element={<SideBar />}>
              <Route path="/" element={<div className="">
                                          <About/>
                                          <Footer/>
                                       </div>
                                      } />

              <Route path="/home" element={<div className="row m-0">
                                          <Info/>
                                          <Map/>
                                       </div>
                                      } />

              <Route path="/chat" element={<Chat/>} />

            </Route>
              



            <Route element={<Card />}>
              <Route path="/create" element={<Create />} />
              <Route path="/signin" element={<SignIn />} />
            </Route>
            
          </Routes>

        </div>
      </div>

    </>
  )
}

export default App

