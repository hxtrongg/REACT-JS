import styles from './Lighting.module.css'


const Lighting = () => {
  return (
    <> 
        <div className={styles.item}>
            <div className={styles.item_image}>
                <img src="./images/basic4.png" alt="" />
            </div>
            <div className={styles.item_desc}>
                <h2 className='mb-5 mt-5 '>Lighting Uprades</h2>
                <h6 className='mb-5 font-light text-xs text-blue-300'>23 Now, 2019, Posted by: admin, 2 Comments</h6>
                <p className='text-blue-300'>Một cách khác để căn giữa theo chiều dọc là sử dụng thuộc tính .
                    Điều này đặc biệt hữu ích khi bạn muốn</p>
                <a className='flex' href="/">Read More <img src="./images/tamgiac.png" alt="" /></a>
            </div>
        </div>
    </>
  )
}

export default Lighting