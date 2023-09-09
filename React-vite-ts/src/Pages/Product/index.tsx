
import DefaultLayout from '../../components/Layouts/DefaultLayouts'
import styles from './Product.module.css'
import ProductGallery from '../../components/ProductGallery'
import AttributesColor from '../../components/AtributesColor'
import ProductsList from '../../components/Products'
import Buttons from '../../components/Button';

const Product = () => {
  return (
    <>
    <DefaultLayout>
      <div className={styles.main_wrapper}>
          <section>
              <div className={styles.product_details}>
                  <ProductGallery />
                  <div className="product_infos">
                      <AttributesColor />
                      <Buttons/>
                  </div>
              </div>
              <ProductsList />
          </section>
          <aside>
            sidebar
          </aside>
      </div>
    </DefaultLayout>
    </>
  )
}

export default Product