import AddPerson from "../icons/AddPerson"
import classes from "./index.module.css"
import { useState, useEffect , useContext} from "react"
import DataContext from "../../contexts/dataContext"
const Navbar = ({setShowModal})=>{
    const [searchStr, setSearchStr] = useState("")
    const {personsList, searchPersonsList, setSearchPersonsList} = useContext(DataContext)
    
    const searchHandler=()=>{
        const newResult = personsList.filter((person)=> person.name.includes(searchStr))
        setSearchPersonsList(newResult)
    }

    useEffect(()=>{
        searchHandler()
      
    },[searchStr])

    return (
        <div className={classes.navbar}>
            <h1>Vue-Draggable</h1>
            <div className="search"> <labeL htmlFor="search">Search</labeL>&nbsp; <input type="text" id="search" onChange={(e)=>setSearchStr(()=>e.target.value)}/> </div>
            <button onClick={()=>setShowModal(true)}>Add <AddPerson/></button>
        </div>
    )
}

export default Navbar