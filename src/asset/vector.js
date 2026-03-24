/* I M P O R T
* * * * * * */

// Function
import metaGlobToObject from '../function/filesystem/metaGlobToObject';

/* E X P O R T
* * * * * * */

const vector = {
    brush: metaGlobToObject(import.meta.glob(
        '/src/asset/vector/brush/*.svg',
        { eager: true }
    )),
    icon: metaGlobToObject(import.meta.glob(
        '/src/asset/vector/icon/*.svg',
        { eager: true }
    )),
    logo: metaGlobToObject(import.meta.glob(
        '/src/asset/vector/logo/*.svg',
        { eager: true }
    )),
    media: metaGlobToObject(import.meta.glob(
        '/src/asset/vector/media/*.svg',
        { eager: true }
    )),
    shape: metaGlobToObject(import.meta.glob(
        '/src/asset/vector/shape/*.svg',
        { eager: true }
    )),
    ui: metaGlobToObject(import.meta.glob(
        '/src/asset/vector/ui/*.svg',
        { eager: true }
    ))
};

export default vector;