import express from "express";
import { products } from "../data";

const router = express.Router();

router.get ("/", (req,res) => {
if (Object.keys(req.query).length > 0 ) {
    const {id} = req.query;
    res.send(products.find((product) => products.id === id))
} else {
    res.send(products)
}
});

router.get ("/search", (req,res) =>{
    res.send("/search")
});
router.get ("/teacher/delete", (req,res) =>{
    res.send("this is teacher file")
});

export default router;