import axios from 'axios'

/**
 * Fetches the homepage images from the contentful delivery api.
 * @param {*} imageURLS - array of imageObjects
 * @param {*} setImageURLS - setting the array of imageObjects
 * @param {*} setIsLoading - checking if the images are still loading
 */
export async function fetchContentfulAPI(imageURLS, setImageURLS, setIsLoading) {
    try {
        
        const resultJson = (await axios.get(process.env.REACT_APP_DELIVERY_ENDPOINT)).data;
        resultJson.includes.Asset.forEach((asset) => {
        const imageObject = {
            title: asset.fields.title,
            url: asset.fields.file.url
        }
        setImageURLS(imageURLS => [...imageURLS, imageObject]);
      })

      cacheImages(imageURLS, setIsLoading);

    } catch(e) {
      console.log(e);
    }
  }

/**
 * Catches the images first, then loads the website.
 * @param {*} srcArray - the array of imageObjects
 * @param {*} setIsLoading - set to false after images being cached 
 */
async function cacheImages(srcArray, setIsLoading) {
  try {
    const promises = await srcArray.map(image => {
      return new Promise((resolve, reject) => {
  
        const img = new Image();
        img.src = image.url;
        img.onload = resolve();
        img.onerror = reject();
      })
    })
    await Promise.all(promises);
    setIsLoading(false);
  } catch (e) {
    console.log(e);
  }  
}




