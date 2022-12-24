import express from "express";
const router = express.Router();
router.use(express.json())

/* GET home page. */
router.get('/', (req, res) => {
    res.render('formComment', {
        name: req.name,
        comment: req.comment
    })
});

export default router;