export const getRandomImage = async () => {
  const BASE_URL = 'https://api.waifu.im/search';

  const response = await fetch(BASE_URL);
  const data = await response.json();

  return data.images[0].url;

}