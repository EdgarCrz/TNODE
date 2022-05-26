const { Router } = require("express");
const {traer} = require("../controllers/inicio.controllers")

const router = Router();


router.get("/", traer);

module.exports = router;