import styles from "./index.module.css"
import Card from "../Card";
import { useContext } from "react";
import DataContext from "../../contexts/dataContext";
const Group =({persons,index})=>{
    const {draggedElementId, setDraggedElementId} = useContext(DataContext)
    let content;
    let head ;
    if(persons.length>0){
        content = persons.map(person=>{
            console.log(person,"...");
            return <Card person={person} key={person.id}/>
        })
    }else {
        content = <p>No data available</p>
    }
    if(index == 0){
     head =   <h3>Age Group: 0-18</h3> 
    }

    if(index == 1){
        head =    <h3>Age Group: 19-25</h3>
       }
       if(index == 2){
        head = <h3>Age Group: 26-45</h3>   
       }
       if(index == 3){
        head =    <h3>Age Group: 45+</h3>
       }

       function allowDrop(ev) {
        ev.preventDefault();
      }
      function drop(ev) {
        var id =draggedElementId
        console.log( id,"vyas");
        ev.target.appendChild(document.getElementById(id));
        ev.preventDefault();

      }
    return(
        <div className={styles.container}>
            <div>
                {head}
            </div>
            <div onDrop={drop} onDragOver={allowDrop} style={{background:"red", height:"100%"}} id={"i"+index}>
            {
             content
            }
            </div>
            
        </div>
    )
}

export default Group