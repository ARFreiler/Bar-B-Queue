const router = require('express').Router();

router.get('/', async (req, res) => {
    // Send the rendered Handlebars.js template back as the response
    res.render('home');
});

router.get('/login', (req, res) => {
    console.log(req.session);
    // if (req.session.logged_in) {
    //     res.redirect('/');
    //     return;
    // }

    res.render('login');
});

router.get('/profile', (req, res) => {
    console.log(req.session);
    // if (req.session.logged_in) {
    //     res.redirect('/');
    //     return;
    // }

    res.render('profile');
});


module.exports = router;