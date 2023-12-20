import { createContext, useState } from 'react';
import Card from "./components/Card"
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import { createPortal } from 'react-dom';
import "./App.css"
import DraggableContainer from './components/DraggableContainer';
import { DataProvider } from './contexts/dataContext';
function App() {
  const [showModal, setShowModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [draggedElementId, setDraggedElementId] = useState("")
  const [searchPersonsList, setSearchPersonsList] = useState([])
  const [personsList, setPersonsList] = useState([])
  const [person, setPerson] = useState({
    name:"",
    email:"",
    phone:"",
    age:""
  })
  return (
    <DataProvider value={{personsList, setPersonsList, person, setPerson, setShowEditModal, draggedElementId, setDraggedElementId, searchPersonsList, setSearchPersonsList}}>
    <div className="App">
      <Navbar setShowModal={setShowModal}/>
      <DraggableContainer />
      {
        createPortal( (showModal || showEditModal )&&<Backdrop setShowModal={setShowModal} showModal={showModal} setShowEditModal={setShowEditModal} showEditModal={showEditModal}>   
        </Backdrop>, document.getElementById("modal"))
      }
      {

      }
    </div>
    </DataProvider>
  );
}
export default App;
