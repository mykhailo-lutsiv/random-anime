import Image from 'next/image';
import { TailSpin } from 'react-loader-spinner';
import styles from './ImageContainer.module.scss';

interface ImageContainerProps {
  url:string;
  isLoading:boolean;
}

function ImageContainer({url, isLoading}:ImageContainerProps) {
  return (
    <div className={styles.container}>
      {isLoading ? (
        <TailSpin
        height="80"
        width="80"
        color="#000000"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      ) : (<img className={styles.image} src={url} alt=''/>)}
    </div>
  )
}
export default ImageContainer;