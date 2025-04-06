import { Router } from 'express';

import { testController } from '@/controllers';
import { router } from '@/utils/helpers';
import { infoSchema } from '@/utils/validations';

const group = Router();

router.get(group, { path: '/', params: infoSchema, handlers: [testController.test] });

export default group;
