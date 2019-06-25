require('dotenv').config();

const express = require("express");
const knex = require("knex");
const knexConfig = require("./knexfile.js");

const db = knex(knexConfig.development);

const server = express();

const cors = require('cors');

server.use(cors());

server.use(express.json());




  const port = process.env.PORT || 4000;
  const greeting = process.env.GREETING;
  server.listen(port, () => {
    console.log(`\n*** ${greeting} http://localhost:${port} ***\n`);
  });