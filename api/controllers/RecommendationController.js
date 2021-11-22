const RecommendationService = require('../services/RecommendationService')
const service = new RecommendationService


class PurchaseOrderController{
    async findByUser(req, res){
        const {id} = req.params
        try {
            const recommendation = await service.findByUser({id});
            return res.status(200).json(recommendation)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    
}

module.exports = PurchaseOrderController;