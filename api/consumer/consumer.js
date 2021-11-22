const { Kafka } = require("kafkajs")
const RecommendationService = require("../services/RecommendationService")
const clientId = "perfect-look-consumer"
const brokers = ["localhost:9192"]
const topic = "perfect-look"
const kafka = new Kafka({ clientId, brokers })
const consumer = kafka.consumer({ groupId: clientId })
const service = new RecommendationService


    const consume = async () => {
        await consumer.connect()
        await consumer.subscribe({topic})
        await consumer.run({
            eachMessage: async ({ topic, partition, message }) => {
                await service.update(JSON.parse(message.value))
            },
        })
    }


module.exports = consume;