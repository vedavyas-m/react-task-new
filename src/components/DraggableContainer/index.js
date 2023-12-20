import Card from "../Card"
import { useContext } from "react"
import DataContext from "../../contexts/dataContext"
import Group from "../Group"
const DraggableContainer =()=>{
    const {person, setPerson, personsList, setPersonsList, searchPersonsList} = useContext(DataContext)
    let g1 = []
    let g2 = []
    let g3 = []
    let g4 = []

    const dataGroup = [g1,g2,g3,g4]

    personsList.map((person)=>{
          // g1 => age 1-18
  // g2 => age 19-25
  // g3 => age 26-45
  // g4 => age 45+
        let {age} = person
                if(age>45){
                        // add to g4
                        g4.push(person)
                    }
                    else if(age<=45 && age>=26 ){
                        // add to g3
                   g3.push(person)
                    }
                    else if(age<=25 && age >18){
                        // add to g2
                      g2.push(person)
                    }else{
                        g1.push(person)
                    }
    })
        
    console.log(dataGroup);
return <div style={{height:"100vh"}}>
  
    <div style={{display:"flex", justifyContent:"space-between", height:"80%", gap:"20px"}}>
    {
        dataGroup.map((data, index)=>{
            return <Group persons={data} index={index} key={index}/>
        })
    }
    </div>
  
</div>
}

export default DraggableContainer