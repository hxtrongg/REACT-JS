import { listMedias } from "../../data/medias"
import styles from './Medias.module.css'

type SingleMediaProps = {
  id: number;
  name: string;
  thumb: string
}

const SingleMedia = ({listMedias}: {listMedias: SingleMediaProps}) => {
  return(   
      <div className={styles.item}>
          <div className={styles.thumb}>
            <img src={listMedias.thumb} alt="" />
            <span>{listMedias.name}</span>
          </div>
        </div>
  )
}




const Medias = () => {
  return (
    <div className="pl-10 pr-10">
      <h2>Danh Mục Nổi Bật</h2>
      <div className='flex grid grid-cols-10 gap-4 rounded-lg pt-5 pb-5'>
        {
          listMedias.map((listMedias) => <SingleMedia listMedias={listMedias}/>)
        }
      </div>
    </div>
  )
}

export default Medias