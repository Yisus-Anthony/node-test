export default function handler(req, res) {
  res.status(200).json({
    message: "Node funcionando en Vercel",
    status: "ok"
  });
}
