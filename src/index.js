const express = require('express');
const mongoose = require('mongoose');

const PORT = 3333;

const app = express();

mongoose.connect('mongodb+srv://todo:todo@aprendizado.d3bwbgj.mongodb.net/?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true
},)

app.get('/', (req, res) => {
    console.log('hello world');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


