const { Router } = require('express');
const RecommendationController = require('../controllers/RecommendationController');

const recommendation = new RecommendationController()

const router = Router()

router
    .get('/api/v1/recommendation/:id', recommendation.findByUser)

module.exports = router;