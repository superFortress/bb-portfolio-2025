/* I M P O R T
* * * * * * */

// Function
import mapDirectoryToObject from '../src/function/filesystem/mapDirectoryToObject.js';
import objectToJS from '../src/function/parse/objectToJS.js';

// Module
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

/* C O N F I G
* * * * * * */

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDirectory = path.join(__dirname, '../public/asset');
const outputDirectory = path.join(__dirname, '../src/asset');

/* R E T U R N
* * * * * * */

// Create Objects from asset directories
fs.readdirSync(inputDirectory, { withFileTypes: true })
    .forEach((directory) => {

        // If no directory, skip
        if (!directory.isDirectory()) return;

        // Sort files in Object
        const directoryPath = path.join(directory.path, directory.name);
        const directoryPathPrefix = path.join('/asset', directory.name);
        const directoryObject = mapDirectoryToObject(directoryPath, (relativePath) => {
            return path.posix.join(directoryPathPrefix, relativePath);
        });

        // Create JS document from Object
        const filePath = path.join(outputDirectory, `${directory.name}.js`)
        fs.writeFileSync(filePath, ''
            + '/* E X P O R T\n* * * * * * */\n\n'
            + `const ${directory.name} = `
            + objectToJS(directoryObject)
            + ';\n\n'
            + `export default ${directory.name};`
        );

    });