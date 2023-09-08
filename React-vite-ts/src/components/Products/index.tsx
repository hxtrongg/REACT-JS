import {products} from '../../data/products'
import styles from './products.module.css'
import numeral from 'numeral';

console.log(products);
type SingleProductProps = {
    id: number;
    name: string;
    price: number;
    promoPrice: number;
    thumb: string;
}

const SingleProduct = ({products}: {products: SingleProductProps})=>{

    const discount = products.promoPrice > 0 ?  Math.round(100 - (products.promoPrice * 100 / products.price)) : 0;
    

    return (
        <div className={styles.item}>
            <div className="thumb">
                <div className={styles.promoPrice}>{discount > 0 ? `${discount} %` : null }</div>
                <img src={products.thumb} alt="" />
            </div>
            <h3>{products.name}</h3>
            <div className={styles.price}>
                {
                    products.promoPrice >= 0 ? (
                       <>
                        <strong>{numeral(products.promoPrice).format('0,0$')}</strong>
                        <del>{numeral(products.price).format('0,0$')}</del>
                       </>
                    )
                    : (
                        <strong>{numeral(products.price).format('0,0$')}</strong>
                    )
                }
                
            </div>
        </div>
    )
}

const ProductsList = () => {
    //Lọc sản phẩm
    const newProducts = products.filter(product => product.promoPrice > 0)

    

  return (
    <div  className={styles.product_list}>
        {
            newProducts.map((product)=> <SingleProduct key={`ProductsList_${product.id}`} products={product} />)
        }
        
    </div>
  )
}

export default ProductsList
