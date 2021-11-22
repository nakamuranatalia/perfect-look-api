const { Kafka } = require("kafkajs")
const clientId = "perfect-look-producer"
const brokers = ["localhost:9192"]
const topic = "perfect-look"
const kafka = new Kafka({ clientId, brokers })
const producer = kafka.producer()

class Producer{

    async produce(obj){
        await producer.connect()
        await producer.send({
            topic,
            messages: [
                { value: JSON.stringify(obj) }
            ]
        })
    }
}


module.exports = Producer;