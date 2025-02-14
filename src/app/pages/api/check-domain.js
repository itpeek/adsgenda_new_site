import fetch from "node-fetch"; // You can use node-fetch to make HTTP requests from the server

export default async function handler(req, res) {
  const { domain } = req.query; // Get domain name from query parameter
  
  const apiKey = process.env.GODADDY_API_KEY; // Store your GoDaddy API Key in .env
  const apiSecret = process.env.GODADDY_API_SECRET; // Store your GoDaddy API Secret in .env

  if (!domain) {
    return res.status(400).json({ error: "Domain name is required" });
  }

  try {
    const response = await fetch(`https://api.godaddy.com/v1/domains/available?domain=${domain}`, {
      method: "GET",
      headers: {
        "Authorization": `sso-key ${apiKey}:${apiSecret}`,
        "Accept": "application/json",
      },
    });

    const data = await response.json();

    if (response.ok) {
      // Return the availability status of the domain
      return res.status(200).json({ available: data.available });
    } else {
      // If there is an error from the API, return the error message
      return res.status(500).json({ error: data.message || "Failed to check domain availability" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
