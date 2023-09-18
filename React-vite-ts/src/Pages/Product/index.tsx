
import DefaultLayout from '../../components/Layouts/DefaultLayouts'
import styles from './Product.module.css'
import ProductGallery from '../../components/ProductGallery'
import AttributesColor from '../../components/AtributesColor'
import ProductsList from '../../components/Products'
import Buttons from '../../components/Button';
import Lighting from '../../components/Lighting'
import Guarantee from '../../components/Guarantee'
import Price from '../../components/Price'

const Product = () => {
  return (
    <>
    <DefaultLayout>
      <div className={styles.tage}>
      <ul className={styles.breadcrumbs}>
        <li><a href="#">Home</a></li>
          <li><a href="#">Product</a></li>
          <li><a href="#">Samsung Galaxy S21 FE 5G</a></li></ul>
      </div>
      <div className={styles.main_wrapper}>
        
          
          <section>
              <div className={styles.product_details}>
                  <ProductGallery />
                  <div className={styles.product_infos}>
                      <Price />
                      <AttributesColor />
                      <Guarantee />
                      <Buttons/>
                      <h2>Hoặc gọi ngay để đặt mua: 1900 1080 (8:00-20:00)</h2>
                      
                  </div>
              </div>
              
              <ProductsList />
              <div className="riveiw_product">
                        <h2>Bài viết đánh giá</h2>
               </div>
          </section>
          <aside>
            {/* Thông Số Sản Phẩm */}
            <div className="specifications">
            <h2>Thông số sản phẩm</h2>
            </div>
          {/* Gọi Tư Vấn */}
            <div className="call_back">
            <h2>Gọi lại tư vấn</h2>
            </div>
          {/* Tin Tức Liên Quan */}
            <div className="related">
              <h2>Tin tức liên quan</h2>
              <Lighting />
            </div>
          </aside>
      </div>
    </DefaultLayout>
    </>
  )
}

export default Product