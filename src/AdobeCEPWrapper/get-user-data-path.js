const getUserDataPath = async () => {
    return new Promise((resolve, reject) => {
        window.__adobe_cep__.evalScript(`$._PPP.get_user_data_path()`, function (adobeDataPath) {
            if (! adobeDataPath) {
                // const mediaDir = path.join(adobeDataPath, 'media');
                // TODO: if media folder does not exist create 
                //  if (!fs.existsSync(mediaDir)) {
                //   fs.mkdirSync(mediaDir);
                // }
                reject(adobeDataPath)
            }
            resolve(adobeDataPath)
        })
    })
  
  }

  module.exports = getUserDataPath;