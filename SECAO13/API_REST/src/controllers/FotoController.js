import multer from 'multer';
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig).single('foto');


class FotoController {
    async store(req, res) {
        return upload(req,res,(error)=>{
            if(error){
                return res.status.json({
                    errors:[error.code],
                })
            }
            res.json(req.file);
        })
    }
}

export default new FotoController();