import express from 'express';
export const router = express.Router();

import storageClient from '../http/controller/client/register-controller.js';
import clientLogin from '../http/controller/client/login-controller.js';

import depositController from '../http/controller/finance/deposit-controller.js';
import sendMoneyController from '../http/controller/finance/sendMoney-controller.js';
import seeBalanceController from '../http/controller/finance/clientBalance-controller.js';

//historic
import depositHistoric from '../http/controller/finance/historic/depositHistoric-controller.js';
import transferHistoric from '../http/controller/finance/historic/transferHistoric-controller.js';

router.post('/register', storageClient.storage);
router.post('/login', clientLogin.login);

router.post('/deposit/s-id/:token', depositController.deposit);
router.post('/send/s-id/:token', sendMoneyController.send);

router.get('/balance/:token', seeBalanceController.balance);

router.get('/deposit-history/:token', depositHistoric.historic);
router.get('/transfer/history/:token', transferHistoric.historic);