const fs = require('fs').promises;
const path = require('path');

fs.readdir(path.resolve(__dirname))
    .then(files => console.log(files))
    .catch(e=>console.log(e));


async function readdir(rootDir){
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);

    walk(files,rootDir);
}

let cont = 1;
async function walk (files,rootDir){
    
    for (let file of files){
        const filleFullpath = path.resolve(rootDir, file);
        const stats = await fs.stat(filleFullpath);

        if(/\.git/g.test(filleFullpath)) continue;
        if(/\node_modules/g.test(filleFullpath)) continue;
        


        if(stats.isDirectory()){
            readdir(filleFullpath);
            continue;
        }

        if(!/\.css$/g.test(filleFullpath) && !/\.html$/g.test(filleFullpath)) continue;
        console.log(cont,' = ',file,stats.isDirectory());
        cont++;        
    }
}

readdir(path.resolve(__dirname,'..'));