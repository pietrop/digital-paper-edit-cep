const path = require('path');
const fs = require('fs');
const diskdb = require('diskdb');
// const { app } = require('electron').remote;

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
// const dataPath = app.getPath('userData');
// const appPath = app.getAppPath();
const appPath = __dirname;

const models = [
    'projects',
    'transcripts',
    'annotations',
    'labels',
    'paperedits'
];
// const currentWindow = electron.remote.getCurrentWindow();
/* eslint-disable class-methods-use-this */
class DBWrapper {
    constructor() {
        // TODO: move to user data folder, so that is in the system but not inside the app
        // easier to persist data between upgrades of the app
        let pathToDiskDb;
      
        // if (process.env.NODE_ENV === 'development') {
        //     pathToDiskDb = path.join(`${
        //         app.getAppPath()
        //     }`, 'src', 'AdobeCEPWrapper', 'db');
        // } else { // if production - check if folder exists
            window.__adobe_cep__.evalScript(`$._PPP.get_user_data_path()`,  (adobeDataPath) => {
              console.log('adobeDataPath: ', adobeDataPath);
                pathToDiskDb = path.join(adobeDataPath, 'db');
                console.info('pathToDiskDb ', pathToDiskDb);
                const isDbFolderPresent = fs.existsSync(pathToDiskDb);
                if (! isDbFolderPresent) {
                    // fs.mkdirSync(pathToDiskDb);
                    fs.mkdirSync(path.join(adobeDataPath, 'db'));
                    // seed db with demo projects
                    models.forEach((model) => {
                        fs.copyFileSync(path.join(appPath, 'src', 'AdobeCEPWrapper', 'seed-db', `${model}.json`), path.join(adobeDataPath, 'db', `${model}.json`));
                    });
                }
                console.info('pathToDiskDb ', pathToDiskDb);
                diskdb.connect(pathToDiskDb, models);
            })
    }

    getAll(model, id) {
        if (id) {
            return diskdb[model].find({
                ...id
            });
        }

        return diskdb[model].find();
    }

    get(model, id) {
        return diskdb[model].findOne({
            ...id
        });
    }

    create(model, data) {
        return diskdb[model].save(data);
    }

    update(model, id, data) {
        return diskdb[model].update({
            ...id
        }, {
            ...data
        }, {
            multi: false, // update multiple - default false
            upsert: false, // if object is not found, add it (update-insert) - default false
        });
    }

    delete(model, id) { // remove only the first match
        return diskdb[model].remove({
            ...id
        }, false);
    }
}
const db = new DBWrapper();
Object.freeze(db);
module.exports = db;

// module.exports = DBWrapper;
