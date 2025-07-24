import express from 'express';

const app = express();


app.get('/', (req, res) => {
    res.send('Server is running succesfully');
});

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(`Listening on: http://localhost:3000/`);
});