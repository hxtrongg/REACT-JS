import styles from './Footer.module.css';
import Poppular from '../../../Poppular'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
          <div className={styles.footer_wrapper}>
              <div className={styles.item}>
                <div className={styles.about}>
                  <h4>ABOUT US</h4>
                  <li>Electrician</li>
                  <li>Lorem ipsum dolor sit amet,</li>
                  <li>consectetur adipiscing elit. Duis nec</li>
                  <li>vestibulum magna, et dapibus lacus.</li>
                  <li>Duis nec vestibulum magna, et</li>
                  <li>dapibus lacus.</li>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.contact}>
                <h4>ABOUT US</h4>
                  <li>
                    <h3>Address:</h3>
                    <p>123 Street Name, City, England</p>
                  </li>
                  <li>
                    <h3>Phone:</h3>
                    <p><a href="tel:">(123) 456-7890</a></p>
                  </li>
                  <li>
                    <h3>Email:</h3>
                    <p><a href="mailto:someone@example.com">mail@example.com</a></p>
                  </li>
                  <li>
                    <h3>Working Days/Hours:</h3>
                    <p>Mon - Sun / 9:00 AM - 8:00 PM</p>
                  </li>
                </div>
              </div>
              <div className={styles.item}>
               <div className={styles.customer}>
                <h4>CUSTOMER SERVICE</h4>
                  <ul>
                    <li><a href="#">Help & FAQs</a></li>
                    <li><a href="#">Order Tracking</a></li>
                    <li><a href="#">Shipping & Delivery</a></li>
                    <li><a href="#">Orders History</a></li>
                    <li><a href="#">Advanced Search</a></li>
                    <li><a href="#">Corporate Sales</a></li>
                    <li><a href="#">Privacy</a></li>
                  </ul>
               </div>
              </div>
              <div className={styles.item}>
                <div className={styles.popural}>
                  <h4>POPPULAR TAGS</h4>
                  <Poppular />
                </div>
              </div>
          </div>
          <div className={styles.footer_copyright}>
            <p>© Aptech eCommerce. 2022. All Rights Reserved</p>
          </div>
      </div>
    </footer>
  )
}

export default Footer