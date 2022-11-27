import redis from "../../../redis"

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({
      body: "Method Not Allowed",
    });
    return;
  }

  const messageRes = await redis.hvals("messages");

  const messages = messageRes
    .map((message) => JSON.parse(message))
    .sort((a, b) => a.created_at - b.created_at);
  res.status(200).json({ messages });
}
