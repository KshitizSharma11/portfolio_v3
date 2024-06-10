// pages/api/graphql.js

export default async function handler(req, res) {
  const response = await fetch(
    "https://ap-south-1.cdn.hygraph.com/content/clx8jrel605aj07uz53e2t5sj/master",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query MyQuery {
            works {
              image
              title
              duration
              description
            }
          }
        `,
      }),
    }
  );

  if (response.ok) {
    const jsonResponse = await response.json();
    res.status(200).json(jsonResponse);
  } else {
    res.status(response.status).json({ error: "Failed to fetch data" });
  }
}
