
import {BiCheckSquare} from 'react-icons/bi'
import {BiCheckShield} from 'react-icons/bi'
import {FiRepeat} from 'react-icons/fi'
import styles from './Guarantee.module.css'




const Guarantee = () => {
  return (
   <>
    <ul className={styles.items}>
        <li className={styles.item}>
        <BiCheckSquare className={styles.icon}/>
        <h6> Bộ sản phẩm gồm:</h6>
        <p className={styles.desc}> Hộp,sách hướng dẫn,cáp,cây lấy sim</p>
        </li>

        <li className={styles.item}>
        <BiCheckShield className={styles.icon}/>
        <h6>Bảo hành:</h6>
        <p className={styles.desc}> Chính hãng 12 tháng</p>
        </li>

        <li className={styles.item}>
        <FiRepeat className={styles.icon}/>
        <h6>Đổi trả:</h6>
        <p className={styles.desc}> Hư gì đổi nấy 12 tháng</p>
        </li>
    </ul>

   </>
  )
}

export default Guarantee