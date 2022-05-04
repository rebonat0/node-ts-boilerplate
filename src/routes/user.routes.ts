import { Router } from 'express';

import { UserController } from '../controllers/user.controller';

const router = Router();

router.get('/', UserController.getMany);
router.get('/:id', UserController.byId);
router.post('/', UserController.create);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.destroy);

export default router;
