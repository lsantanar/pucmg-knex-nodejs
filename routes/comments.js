import express from "express";
const router = express.Router();
import { CommentsService } from "../services/Comment.js";

//método responsável por fazer uma requisição json e inserir nos comentários
router.post("/", (req, res) => {
    const { body } = req; 
    CommentsService.insert(body).then((comment) => {
        res.json(comment);
    });
});   

//método para retornar os comentários
router.get("/", function (_, res) {
	CommentsService.findAll().then(function (comments) {
		res.json(comments);
	});
});

export default router;