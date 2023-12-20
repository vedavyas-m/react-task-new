import styles from "./index.module.css"
import { useState, useContext } from "react"
import DataContext from "../../contexts/dataContext"
const EditFormModal=({setShowEditModal})=>{
   const {person, setPerson,personsList, setPersonsList,} = useContext(DataContext)
   const{name, email, phone,age,id} = person;

   const resetForm=()=>{
    setPerson(
        {
            name:"",
            email:"",
            phone:"",
            age:""
          }
    )
   }
return <div className={styles.formContainer} onClick={(e)=>e.stopPropagation()}>

    <h3 className={styles.head}> 
       Edit Person
    </h3>
    <form className={styles.form} id="form">
        <div className={styles.inputContainer}>
            <label htmlFor="name">Name : </label>
            <input type="text" id="name" value={name} onChange={(event)=>setPerson(prev =>{return {...prev,name:event.target.value}})} required/>
        </div>

        <div className={styles.inputContainer}>
            <label htmlFor="email">Email : </label>
            <input type="email" id="email" value={email} onChange={(event)=>setPerson(prev =>{return {...prev,email:event.target.value}})} required/>
        </div>

        <div className={styles.inputContainer}>
            <label htmlFor="phoneNumber">Phone Number : </label>
            <input type="tel" id="phoneNumber" value={phone} onChange={(event)=>setPerson(prev =>{return {...prev,phone:event.target.value}})} required/>
        </div>
        
        <div className={styles.inputContainer}>
            <label htmlFor="age">Age : </label>
            <input type="number" id="age" min={1} value={age} onChange={(event)=>setPerson(prev =>{return {...prev,age:event.target.value}})} required/>
        </div>

        <div className={styles.buttonsContainer}>
            <button type="button" onClick={()=>setShowEditModal(false)}>Cancel</button>
            <button onClick={(e)=>{
                e.preventDefault();
                if(name && email && phone && age){

                        let arr = [...personsList]
                        const index = arr.findIndex(person=> person.id ==id )
                        arr.splice(index,1,person)
                        setPersonsList(arr)
                        resetForm()

                        setShowEditModal(false)
                
                }
                else{
                    alert("please check your form")
                }
            }} type="submit"> Edit</button>
        </div>
    </form>
</div>
}

export default EditFormModal