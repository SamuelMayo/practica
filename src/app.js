import express from 'express';

// settings
const app = express();
const PORT = process.env.PORT || 8080;


// Start server
const server = app.listen(PORT,()=>{console.log(`listening in PORT ${PORT}`)})

