import {Router} from 'express'

const router = new Router()

router.post('/signin' , async (req, res) =>{

const user = {_id: '1', email: 'alex@gmail.com', userName: 'alex'}
res.json(user);
});

router.post('/signup' , async (req, res) =>{

    const user = {_id: '1', email: 'alex@gmail.com', userName: 'alex'}
    res.json(user);

});


export default router;