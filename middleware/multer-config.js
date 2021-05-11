const multer = require('multer');

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpeg',
    'image/png': 'png'
}

const storage = multer.diskStorage({

    destination: (req, file, callback) => {
        callback(null, 'images')
    },
    filename: (req, file, callback) => {
        const name = file.originalname.split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
        // validateFile(extension);
        callback(null, name + Date.now() + '.' + extension);
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1000000, // 150 KB for a 1080x1080 JPG 90
    },
    fileFilter: (req, file, callback) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            console.log('test filter');
            callback(null, true);
        } else {
            callback(null, false);
            return callback(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});






// function validateFile(fileExtension){

//     const allowedExtensions = ['jpg', 'png', 'jpeg']; 
//     // const sizeLimit = 1000000; /* 1 mégabyte */

//     /* vérifie si l'extension du fichier téléchargé est incluse dans notre tableau des extensions de fichiers autorisées */
//     if (!allowedExtensions.includes(fileExtension)) {
//         alert("format du fichier non adapté");
//         this.value = null;
//     } 
//     // else if (fileSize > sizeLimit){
//     //     alert("Fichier trop lourd")
//     //     this.value = null;
//     // }
// }

// module.exports = multer({ storage }).single('image');
module.exports =  upload.single('image');

