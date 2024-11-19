require("dotenv").config();

const dev = {
  app: {
    port: process.env.PORT || 4000,
  },
  db: {
    url: process.env.DB_URl || "mongodb://localhost:27017/userDB",
  },
};

module.exports = dev;
