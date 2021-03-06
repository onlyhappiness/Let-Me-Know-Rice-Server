const { Router } = require("express");
const router = Router();

const tryCatch = require("../middlewares/tryCatch");

const {
  userSignUp, // 유저 회원가입
  userLogin, // 유저 로그인
} = require("../controllers/index");

// 유저 회원가입
router.post("/signup", tryCatch(userSignUp));

// 유저 로그인
router.post("/login", tryCatch(userLogin));

module.exports = router;
