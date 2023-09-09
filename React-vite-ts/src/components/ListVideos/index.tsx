import { useState } from 'react'
import {IoIosHeart} from 'react-icons/io'
import styles from './ListVideos.module.css'

type SingleVideoType = {
    thumb: string,
    title: string,
    desc: string
}
const SingleVideo = ({ thumb, title, desc }: SingleVideoType) => {
    const [iconColor, setIconColor] = useState('black'); // Khởi tạo màu ban đầu

    const handleIconClick = () => {
        // Thay đổi màu khi biểu tượng được click
        setIconColor(iconColor === 'black' ? 'red' : 'black');
    };

    return (
        <div className={styles.video_item}>
            <div className={styles.thumb}>
                <img src={thumb} alt={title} />
            </div>
            <div className={styles.content}>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
            <div className={styles.icons}>
                <IoIosHeart onClick={handleIconClick} style={{ color: iconColor, cursor: 'pointer' }} />
            </div>
        </div>
    )
}
const VideosList = () => {
  return (
    <div className={styles.video_wrapper}>
        <h2 className='text-xl'>React Videos</h2>
        <p>A brief history of React</p>
        <input className='bg-slate-200 rounded-full py-2 px-4' type="text" name='keywords' placeholder='Search' />
        <h4 className='my-2'>5 Videos</h4>
        <SingleVideo thumb='https://cult.honeypot.io/_gatsby/image/46a7209a18fa4f60152380748df19f59/51532308479b37d075587a063cb62bac/212111%E2%80%93React.js_The-documentary01-04-v3.jpg?u=https%3A%2F%2Fimages.ctfassets.net%2Fcjwb7umaxoxv%2FWdSbdaXvtEFYuVLWwGONp%2F6010ea7cb87cbb8b478b1224d3cccc39%2F212111___React.js_The-documentary01-04-v3.jpg&a=w%3D940%26h%3D529%26fm%3Djpg%26q%3D85&cd=2023-02-07T10%3A53%3A34.024Z' title='abc' desc='desc' />
        <SingleVideo thumb='https://cult.honeypot.io/_gatsby/image/46a7209a18fa4f60152380748df19f59/51532308479b37d075587a063cb62bac/212111%E2%80%93React.js_The-documentary01-04-v3.jpg?u=https%3A%2F%2Fimages.ctfassets.net%2Fcjwb7umaxoxv%2FWdSbdaXvtEFYuVLWwGONp%2F6010ea7cb87cbb8b478b1224d3cccc39%2F212111___React.js_The-documentary01-04-v3.jpg&a=w%3D940%26h%3D529%26fm%3Djpg%26q%3D85&cd=2023-02-07T10%3A53%3A34.024Z' title='abcdè' desc='desc' />
    </div>
  )
}

export default VideosList;