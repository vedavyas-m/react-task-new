import styles from "./index.module.css"
import DataContext from "../../contexts/dataContext"
import { useContext } from "react"
const Card = ({person})=>{
    const {personsList, setPersonsList ,setShowEditModal, setPerson, setDraggedElementId} = useContext(DataContext)
    const editPerson=(id)=>{
    setShowEditModal(true)
    const index = personsList.findIndex(person=> person.id ==id )
    setPerson(()=>personsList[index])
    }
    const deletePerson=(id)=>{
        const newList = [...personsList]
        // get id
        const index = newList.findIndex(person=> person.id ==id )
        newList.splice(index,1)
        setPersonsList(newList)
    }

    const dragFunction=(e)=>{
        e.dataTransfer.setData("text", e.target.id);
        setDraggedElementId(e.target.id)
    }
    return( 
        <div style={{textAlign:"left", backgroundColor:"white", borderRadius:"5px", margin:"5px", border:"1px dashed black ", padding:"5px"}} draggable onDrag={dragFunction} id={person.id}>
            <div style={{display:"flex", gap:"5px ", justifyContent:"flex-end"}}> 
                <button onClick={()=>editPerson(person.id)}>Edit</button>
                <button onClick={()=>deletePerson(person.id)}>Delete</button>
            </div>
            <p>Name : {person.name}</p>
            <p>Email : {person.email}</p>
            <p>Age : {person.age}</p>
            <p>Phone : {person.phone}</p>

        </div>)

}

export default Card