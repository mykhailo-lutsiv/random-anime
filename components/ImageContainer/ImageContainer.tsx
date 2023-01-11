import Image from 'next/image';
import styles from './ImageContainer.module.scss';

interface ImageContainerProps {
  url:string;
}

function ImageContainer({url}:ImageContainerProps) {
  return (
    <div className={styles.container}>
      
      <img className={styles.image} src={url} alt=''/>
    </div>
  )
}
export default ImageContainer;