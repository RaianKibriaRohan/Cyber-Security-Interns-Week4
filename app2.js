const express = require("express");
const helmet = require("helmet");

const app = express();

/* ==============================
   🔒 1. BASIC SECURITY HEADERS
============================== */
app.use(helmet());

/* ==============================
   🛡️ 2. CONTENT SECURITY POLICY (CSP)
============================== */
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"], // only allow same origin
      scriptSrc: ["'self'"], // block external scripts
      styleSrc: ["'self'", "https://trusted-cdn.com"], // allow trusted CSS
      imgSrc: ["'self'", "data:"], // allow images
      connectSrc: ["'self'"], // restrict API calls
      objectSrc: ["'none'"], // block Flash, plugins
      upgradeInsecureRequests: [], // force HTTPS
    },
  })
);

/* ==============================
   🔐 3. HSTS (HTTPS ENFORCEMENT)
============================== */
app.use(
  helmet.hsts({
    maxAge: 31536000, // 1 year
    includeSubDomains: true,
    preload: true,
  })
);

/* ==============================
   🚫 4. OTHER IMPORTANT HEADERS
============================== */

// Prevent clickjacking
app.use(helmet.frameguard({ action: "deny" }));

// Prevent MIME sniffing
app.use(helmet.noSniff());

// Hide X-Powered-By header
app.disable("x-powered-by");

/* ==============================
   📦 TEST ROUTE
============================== */
app.get("/", (req, res) => {
  res.send("Security Headers & CSP Applied Successfully 🔐");
});

/* ==============================
   🚀 SERVER START
============================== */
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Secure server running on http://localhost:${PORT}`);
});