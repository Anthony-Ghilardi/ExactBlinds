const { query } = require("../db");
const { getClient } = require("../db");
const { v4: uuidv4 } = require("uuid");

async function saveBlindDesign(req, res) {
  const { id, name, mountType, width, height, user_uid, design_project_id } =
    req.body;
  try {
    await query(
      "INSERT INTO blind_designs (id, name, mount_type, width, height, user_uid, design_project_id) VALUES ($1, $2, $3, $4, $5, $6, $7)",
      [id, name, mountType, width, height, user_uid, design_project_id]
    );
    res.send("Design added successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Unable to add design");
  }
}

async function saveUser(req, res) {
  const { uid, email } = req.body;
  try {
    await query("INSERT INTO users (uid, email) VALUES ($1, $2)", [uid, email]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Unable to add user");
  }
}

async function saveDesignName(req, res) {
  const id = uuidv4();
  const { name, user_uid } = req.body;
  try {
    await query(
      "INSERT INTO design_projects (id, name, user_uid) VALUES ($1, $2, $3)",
      [id, name, user_uid]
    );
    res.status(201).json({ id });
  } catch (error) {
    console.error(error);
    res.status(500).send("Unable to add design");
  }
}

async function getShowroom(req, res) {
  const { uid } = req.query;
  try {
    const result = await query(
      "SELECT * FROM design_projects WHERE user_uid = $1",
      [uid]
    );
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Unable to load user desgins");
  }
}

async function displayBlindDesign(req, res) {
  const { id: design_project_id } = req.body;
  try {
    const result = await query(
      "SELECT * FROM blind_designs WHERE design_project_id = $1",
      [design_project_id]
    );
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Unable to load selected design");
  }
}

async function updateDesgin(req, res) {
  const { name, mountType, width, height, id } = req.body;
  try {
    const result = await query(
      "UPDATE blind_designs SET name = $1, mount_type = $2, width = $3, height = $4 WHERE id = $5",
      [name, mountType, width, height, id]
    );
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Unable to update design");
  }
}

async function deleteDesign(req, res) {
  const { id: design_project_id } = req.body;
  const client = await getClient();
  try {
    await client.query("BEGIN");
    await client.query(
      "DELETE FROM blind_designs WHERE design_project_id = $1",
      [design_project_id]
    );
    await client.query("DELETE FROM design_projects WHERE id = $1", [
      design_project_id,
    ]);
    await client.query("COMMIT");
    res.status(200).send("Design deleted successfully");
  } catch (error) {
    await client.query("ROLLBACK");
    res.status(500).send("Unable to delete design");
  } finally {
    client.release();
  }
}

module.exports = {
  saveBlindDesign,
  saveUser,
  saveDesignName,
  getShowroom,
  displayBlindDesign,
  updateDesgin,
  deleteDesign,
};
