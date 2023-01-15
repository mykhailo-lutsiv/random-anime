import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import RefreshButton from '../components/RefreshButton/RefreshButton'
import { getRandomImage } from '../utils/getRandomImage'
import ImageContainer from '../components/ImageContainer/ImageContainer'
import { useEffect, useState } from 'react'



export default function Home() {
  const [url, setUrl]= useState('');
  const [isLoading, setIsLoading] = useState(false);

  const changeImage = async () =>{
    setIsLoading(true);
    const newUrl = await getRandomImage();
    setUrl(newUrl);
    setIsLoading(false);
  }
  useEffect(() => {
    changeImage()
  }, []);
  return (
    <div>
      <ImageContainer isLoading={isLoading} url={url} />
      <RefreshButton onClick={changeImage} />
    </div>
  )
}
