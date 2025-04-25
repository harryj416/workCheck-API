export default (req, res) => {
  // For GET requests:  /api/echo?msg=hi
  // For POST requests: JSON body { "msg": "hi" }
  const msg = req.method === 'POST' ? req.body?.msg : req.query.msg;
  res.status(200).json({ msg: msg ?? 'pong' });
}; 