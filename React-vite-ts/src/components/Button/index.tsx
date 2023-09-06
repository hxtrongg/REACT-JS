import React from 'react'
import styles from './Button.module.css'
import { FiShoppingCart } from 'react-icons/fi'
import {FiPhone} from 'react-icons/fi'



const Buttons = () => {
  return (
    <div className={styles.items}>
        <button className={styles.left}>
            <FiShoppingCart className={styles.icon}/>
            Thêm giỏ hàng
        </button>
        
        <button className={styles.right}>
            <FiPhone className={styles.icon}/>
            Gọi điện tư vấn
        </button>
    </div>
  )
}

export default Buttons