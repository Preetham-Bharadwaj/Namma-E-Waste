export default async function handler(req, res) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const { latitude, longitude } = req.body;
    
    if (!latitude || !longitude) {
      return res.status(400).json({ success: false, error: 'Latitude and longitude required' });
    }

    const overpassQuery = `
      [out:json][timeout:25];
      (
        node(around:150,${latitude},${longitude})["addr:housenumber"];
        way(around:150,${latitude},${longitude})["addr:housenumber"];
        relation(around:150,${latitude},${longitude})["addr:housenumber"];
        node(around:250,${latitude},${longitude})["addr:street"];
        way(around:250,${latitude},${longitude})["addr:street"];
        relation(around:250,${latitude},${longitude})["addr:street"];
      );
      out tags center 10;
    `;

    const response = await fetch("https://overpass-api.de/api/interpreter", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" },
      body: `data=${encodeURIComponent(overpassQuery)}`,
    });

    if (!response.ok) {
      throw new Error(`Overpass request failed: ${response.status}`);
    }

    const data = await response.json();
    res.json({ success: true, data });
  } catch (error) {
    console.error("Geocoding error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
}
