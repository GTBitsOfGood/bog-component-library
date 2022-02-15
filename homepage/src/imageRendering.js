import axios from 'axios'

/**
 * Fetches the homepage images from the contentful delivery api.
 * @param {*} imageURLS - array of imageObjects
 * @param {*} setImageURLS - setting the array of imageObjects
 * @param {*} setIsLoading - checking if the images are still loading
 */
export async function fetchContentfulAPI(imageURLS, setImageURLS, setIsLoading) {
    try {
        const imageURLSDict = {}
        const resultJson = (await axios.get(process.env.REACT_APP_DELIVERY_ENDPOINT)).data;
        resultJson.includes.Asset.forEach((asset) => {
          imageURLSDict[asset.fields.title] = asset.fields.file.url;
        })

      // only setting the imageURLS oneTime
      setImageURLS(imageURLSDict);
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
async function cacheImages(srcDict, setIsLoading) {
  try {
    const promises = await Object.keys(srcDict).map(image => {
      return new Promise((resolve, reject) => {
  
        const img = new Image();
        img.src = srcDict[image];
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




