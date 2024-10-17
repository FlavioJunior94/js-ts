import {Router} from 'express';
import UserController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';
const router = new Router();


// Ñ deveria existir 
router.get('/', loginRequired,UserController.index); // Lista Usuarios
router.get('/:id',UserController.show);  //Lista Usuario

router.post('/',UserController.store);
router.put('/', loginRequired,UserController.update);
router.delete('/', loginRequired,UserController.delete);

export default router;

/*
index --> lista todos os users -> GET
store/create --> cria um novo user -> POST
delete --> apaga um usuario -> DELETE
show --> mostra um user -> GET
update --> atualiza um usuario -> PATCH OU PUT
*/