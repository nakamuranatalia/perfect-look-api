const db = require('../models')

class RecommendantionRepository{
    async findColumn(userId, brand, column){
        return db.Recommendations.findOne({
            where: {userId: userId,
                    brand: brand},
            attributes: [column],
            raw:true
        })
    }

    async update(userId, brand, quantity){
        return db.Recommendations.update(
            quantity, 
            {where: {userId: userId,
                    brand:brand
            }
        })
    }

    async create(infos){
        return db.Recommendations.create(infos)
    }

    async findRecommendationBrand({userId}){
        return db.Recommendations.findOne({
            where: {userId: Number(userId)},
            order: [
                ['quantity', 'DESC']
            ],
            attributes: ["brand"],
            raw:true
        })
    }
}

module.exports = RecommendantionRepository;