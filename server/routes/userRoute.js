const { register, login, setAvatar, getAllUsers, logOut } = require("../controllers/userControllers");

const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.post("/setAvatar/:id", setAvatar);
router.get("/alluser/:id",getAllUsers);
router.get("/logout/:id", logOut);

module.exports = router;