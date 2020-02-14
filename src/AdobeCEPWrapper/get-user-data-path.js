/**
 * Get user data path from Adobe Premiere, via /lib/jsx/Premiere.jsx
 * returns a promiise 
 */
const getUserDataPath = async () => {
    return new Promise((resolve, reject) => {
        window.__adobe_cep__.evalScript(`$._PPP.get_user_data_path()`, function (adobeDataPath) {
            if (! adobeDataPath) {
                reject(adobeDataPath)
            }
            resolve(adobeDataPath)
        })
    })
  }

  module.exports = getUserDataPath;