import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import RefreshButton from '../components/RefreshButton/RefreshButton'
import { getRandomImage } from '../utils/getRandomImage'
import ImageContainer from '../components/ImageContainer/ImageContainer'
import { useState } from 'react'



export default function Home() {
  const [url, setUrl]= useState('');

  const changeImage = async () =>{
    const newUrl = await getRandomImage();
    setUrl(newUrl);
    
  }
  return (
    <div>
      <ImageContainer url={url} />
      <RefreshButton onClick={changeImage} />
    </div>
  )
}
