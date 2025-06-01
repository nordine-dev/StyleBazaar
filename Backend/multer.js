import multer from "multer";
import path from "path";



const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, "uploads/", (err)=>{
            if(err){
                return cb(new Error("Failed to set destination for file upload"));
            }
        })
    },
    filename: (req, file, cb)=>{
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + '-' + file.originalname );
    }
})

const upload = multer({
    storage: storage,
})

export default upload;

