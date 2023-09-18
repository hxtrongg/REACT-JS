
import styles from './Button.module.css'
import { FiShoppingCart,FiHeart } from 'react-icons/fi'

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
      <SingleButons icon={<FiShoppingCart />} lable='Thêm vào giỏ hàng'/>
      <SingleButons className='right' icon={<FiHeart />} lable='Yêu thích'/>
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