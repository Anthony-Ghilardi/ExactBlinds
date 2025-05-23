const { query } = require("../db");

async function saveBlindDesign(req, res) {
  const { id, name, mountType, width, height, user_uid } = req.body;
  try {
    await query(
      "INSERT INTO blind_designs (id, name, mount_type, width, height, user_uid) VALUES ($1, $2, $3, $4, $5, $6)",
      [id, name, mountType, width, height, user_uid]
    );
    res.send("Design added successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Unable to add design");
  }
}

async function saveUser(req, res) {
  const  {uid, email } = req.body;
  try {
    await query(
      "INSERT INTO users (uid, email) VALUES ($1, $2)",
      [uid, email]
    );
  } catch (error) {
    console.error(error);
    res.status(500).send("Unable to add user");
  }
}

module.exports = { 
  saveBlindDesign,
  saveUser,
};
