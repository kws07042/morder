import express from 'express';

const app = express();

const po = 5000;
app.listen(po, () => {
    console.log(`port ${po}`)
})