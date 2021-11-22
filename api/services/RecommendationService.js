const ProductRepository = require("../repositories/ProductRepository")
const RecommendantionRepository = require("../repositories/RecommendantionRepository")
const recommendationRepository = new RecommendantionRepository
const productRepository = new ProductRepository

class RecommendationService{
    async update(message){
        const brand = await recommendationRepository.findColumn(message.userId, message.brand, "brand")
        
        if(brand !== null){
            const quantityObject = await recommendationRepository.findColumn(message.userId, message.brand, "quantity")
            let quantity = quantityObject.quantity
            quantity++
            await recommendationRepository.update(message.userId, message.brand, {quantity: quantity})
        }else{
            const recommendations = {
                userId: message.userId,
                brand: message.brand,
                quantity: 1
            }
            await recommendationRepository.create(recommendations)
        }
    }
    
    async findByUser({id}){
        const brand = await recommendationRepository.findRecommendationBrand({userId: id})
        return productRepository.findByBrand(brand.brand)  
    }
}

module.exports = RecommendationService