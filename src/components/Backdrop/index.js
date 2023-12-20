import styles from "./index.module.css"
import FormModal from "../FormModal"
import EditFormModal from "../EditFormModal";
const Backdrop = ({children,showModal,setShowModal, showEditModal, setShowEditModal})=>{
  console.log(showEditModal);
return (<div className={styles.backdrop} onClick={()=>{
  if(showModal){
    setShowModal(false)
  }
  if(showEditModal){
    setShowEditModal(false)
  }
  }}>
  {showModal && <FormModal setShowModal={setShowModal} setShowEditModal={setShowEditModal}/>}
  {showEditModal && <EditFormModal setShowEditModal={setShowEditModal} FormModal setShowModal={setShowModal}/>}
</div>)
}
export default Backdrop