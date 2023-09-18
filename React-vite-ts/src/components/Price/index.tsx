import styles from './price.module.css'

const Price = () => {
  return (
    <>
         <h1 className={styles.product_name}>
            Samsung Galaxy S21 FE 5G (8GB/128GB)
         </h1>
        <div className={styles.product_price}>
            <strong>12.490.000đ</strong>
            <del>16.990.000đ</del>
        </div>
    </>
  )
}

export default Price