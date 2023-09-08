
import styles from './Button.module.css'
import { FiShoppingCart } from 'react-icons/fi'
import {FiPhone} from 'react-icons/fi'

type ButtonProps = {
  icon:React.ReactNode,
  lable:string,
  className?:string
}

function SingleButons ({icon='', lable='Default', className=''} : ButtonProps) {
  return (
    <>
    <button className={className !== '' ? ` ${styles.left} ${styles[className]}` : styles.left} >{icon} {lable}</button>
    </>
  )
} 



const Buttons = () => {
  return (
    <>
      <SingleButons icon={<FiShoppingCart style={{ marginRight:'8px' }}/>} lable='Thêm vào giỏ hàng'/>
     
      
      <SingleButons className='right' icon={<FiPhone style={{ marginRight:'8px' }}/> } lable='Gọi tư vấn'/>
    </>
  )
}

export default Buttons

{/* <div className={styles.items}>
        <button className={styles.left}>
            <FiShoppingCart className={styles.icon}/>
            Thêm giỏ hàng
        </button>
        
        <button className={styles.right}>
            <FiPhone className={styles.icon}/>
            Gọi điện tư vấn
        </button>
    </div> */}