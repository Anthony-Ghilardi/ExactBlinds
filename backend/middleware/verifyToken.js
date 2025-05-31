const admin = require("firebase-admin");

let serviceAccount;

if (process.env.FIREBASE_CONFIG_JSON) {
  serviceAccount = JSON.parse(process.env.FIREBASE_CONFIG_JSON);
} else {
  // Local
  serviceAccount = require("../exact-blinds-firebase-adminsdk-fbsvc-021c4f6513.json");
}

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

module.exports = async function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "No token provided" });
  }

  const idToken = authHeader.split(" ")[1];

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error("Token verification failed:", error);
    return res.status(401).json({ error: "Unauthorized" });
  }
};
