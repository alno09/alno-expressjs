const router = require('express').Router();
const multer = require('multer');
const upload = multer({dest: 'uploads/'})


router.get('/', (req, res, next) => {
    const {page, total} = req.query;
    res.send({
        status: "sukses",
        message: "Selamat Datang di ExpressJS",
        page,
        total
    })
})

router.post('/product', (req, res) => {
    console.log(req.query);
    res.json(req.body)
});

app.post('/product', upload.single('image'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
  })

router.get('/:category/:tag', (req, res) => {
    const {category, tag} = req.params;
    res.send({category, tag});
});

module.exports = router;