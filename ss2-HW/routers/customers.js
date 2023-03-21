import express from "express";
import { customers } from "../data";

const router = express.Router();

router.get ("/", (req,res) =>{
    if (Object.keys(req.query).length > 0 ) {
        const {id} = req.query;
        res.send(customers.find((customer) => customers.id === id))
    } else {
        res.send(customers)
    }
});

router.get ("/delete", (req,res) =>{
    res.send("delete id")
});
router.get ("/order", (req,res) =>{
    res.send("sort")
});

export default router;