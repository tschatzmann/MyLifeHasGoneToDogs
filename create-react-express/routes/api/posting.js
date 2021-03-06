const router = require("express").Router();
const postingsController = require("../../controllers/postingsController");

// Matches with "/api/postings"
router.route("/posting")
  .get(postingsController.findAll)
  .post(postingsController.create);

// Matches with "/api/postings/:id"
router
  .route("posting/:id")
  .get(postingsController.findById)
  .put(postingsController.update)
  .delete(postingsController.remove);

module.exports = router;
