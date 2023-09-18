import styles from './Lighting.module.css'


const Lighting = () => {
  return (
    <> 
        <div className={styles.item}>
            <div className={styles.item_image}>
                <img src="./images/basic4.png" alt="" />
            </div>
            <div className={styles.item_desc}>
                <li><h2>Lighting Uprades</h2></li>
                <li><span>23 Now, 2019, Posted by: admin, 2 Comments</span></li>
                <li><p>Một cách khác để căn giữa theo chiều dọc là sử dụng thuộc tính .
                    Điều này đặc biệt hữu ích khi bạn muốn</p></li>
                <a className={styles.readmore} href="/"> Read More</a>
            </div>
        </div>
    </>
  )
}

export default Lighting