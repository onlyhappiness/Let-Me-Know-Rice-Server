const { unknownError } = require("../../error/errorcode");
const { Shop } = require("../../models/shop");

module.exports = async (req, res, next) => {
  Shop.find((err, shopList) => {
    if (err) {
      console.log(err);
      return next(unknownError);
    } else {
      return res.status(200).send({
        message: "밥 줘 음식점 요청",
        data: shopList,
      });
    }
  });
};
