const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const mqtt = require('mqtt');
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccount.json');

const app = express();
const port = process.env.PORT || 3000;

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const mqttClient = mqtt.connect(process.env.MQTT_BROKER_URL);

mqttClient.on('connect', () => {
    console.log('Connected to MQTT broker');
    mqttClient.subscribe(process.env.MQTT_TOPIC, (error) => {
        if (!error) {
            console.log('Subscribed to Topic!');
        } else {
            console.log('Subscription Error:', error)
        }
    });
});

mqttClient.on('message', async (topic, message) => { 
    console.log(`Received message from topic: ${topic}: ${message.toString()}`);
    
    try {
        const data = JSON.parse(message.toString());
        const waterVal = data.water;

        await db.collection('water').doc('sensor').set({
            value: waterVal,
            timeStamp: admin.firestore.FieldValue.serverTimestamp()
        });

        console.log('Data successfully written to firestore!');
        console.log(data, message.toString());
    } catch (error) {
        console.error('Error parsing JSON or Writing to firestore', error)
    }
});

app.use(express.json());
app.get('/', (req, res) => {
    res.json({ message: 'IoT MQTT to Firebase server is currently running!' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});