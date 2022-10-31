const router = require('express').Router();

router.get('/login', (req,res) => {
 res.render('login');
});

router.get('/', (req,res) => {
    res.render('landing');
   });


module.exports = router;