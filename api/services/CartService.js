const CartRepository = require("../repositories/CartRepository")
const ProductRepository = require("../repositories/ProductRepository")
const ProductCartRepository = require("../repositories/ProductCartRepository")
const cartRepository = new CartRepository
const productCartRepository = new ProductCartRepository
const productRepository = new ProductRepository
const Correios = require('node-correios')

class CartService{
    
    async shippingCodeTransformation(infos){
        const shipping = infos.shippingMethod.toUpperCase().replace(/ /g, '');
        switch (shipping){
            case ("SEDEX"):
                return "04014"
                break
            case ("PAC"):
                return "04510"
                break
        }
    }

    async weightSum(infos, column){
        let weight = []
        let quantity = []
        for(const element of infos.products){
            const id = element.productId
            const product = await productRepository.findColumn(id, column)
            weight.push(product.weight)
            quantity.push(element.quantity)
        }
        const totalWeight = weight.reduce(function(r,a,i){return r+a*quantity[i]},0) + 0.2
        return totalWeight
    }

    async boxSize (infos, columnOne, columnTwo, columnThree){
        let lenght = []
        let height = []
        let width = []
        let quantity = []
        for(const element of infos.products){
            const id = element.productId
            const product = await productRepository.findColumns(id, columnOne, columnTwo, columnThree)
            lenght.push(product.lenght)
            height.push(product.height)
            width.push(product.width)
            quantity.push(element.quantity)
        }

        const totalWidth = width.reduce(function(r,a,i){return r+a*quantity[i]},0) 
        const maxLenght = Math.max(...lenght)
        const maxHeight = Math.max(...height)

        const size = {
            totalWidth,
            maxLenght,
            maxHeight 
        }

        return size
    }

    async shipping(infos){
        const productMeasurement = await this.boxSize(infos, "lenght", "height", "width" )
        
        const shipping = {
            nCdServico: await this.shippingCodeTransformation(infos),
            sCepOrigem : "01037010",
            sCepDestino : infos.zipCode,
            nVlPeso : await this.weightSum(infos, "weight"),
            nCdFormato : 1, 
            nVlComprimento : productMeasurement.maxLenght,
            nVlAltura : productMeasurement.maxHeight,
            nVlLargura : productMeasurement.totalWidth,
            nVlDiametro : productMeasurement.maxLenght
        }
        let correios = new Correios()
        return correios.calcPreco(shipping)
    }

    async productsPrice(infos, column){
        let price = []
        let quantity = []
        for(const element of infos.products){
            const id = element.productId
            const product = await productRepository.findColumn(id, column)
            price.push(product.price)
            quantity.push(element.quantity)
        }

        const productsPrice = price.reduce(function(r,a,i){return r+a*quantity[i]},0)
        return parseFloat(productsPrice.toFixed(2))
    }

    async totalPrice(infos){
        const shipping = await this.shipping(infos)
        const shippingValue = parseFloat(shipping[0].Valor.replace(',','.'))
        const productsPrice = await this.productsPrice(infos, "price")
        const totalPrice = shippingValue + productsPrice
        return totalPrice.toFixed(2)
    }

    async create(infos){
        const cart = {
            userId: infos.userId,
            totalPrice: await this.totalPrice(infos)
        }
        const id = await cartRepository.create(cart)
        await productCartRepository.create(infos, {cartId: id.dataValues.id})

        return cartRepository.findById({id: id.dataValues.id})
    }
    
    async findById({id}){
        return cartRepository.findById({id})
    }

    async update(infos, {id}){
        const cart = {
            totalPrice: await this.totalPrice(infos)
        }
        
        await productCartRepository.delete({cartId: id})
        await cartRepository.update(cart, {id})
        await productCartRepository.create(infos, {cartId: id})

        return this.findById({id}) 
    }

    async delete({id}){
        return cartRepository.delete({id})
    }
}

module.exports = CartService