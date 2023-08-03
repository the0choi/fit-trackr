const Health = require("../models/health");

module.exports = {
  create,
  delete: deleteNote,
};

async function deleteNote(req, res) {
  try {
    const healthOne = await Health.findById(req.params.id);
    if (!healthOne) return res.redirect("/dashboard");
    healthOne.notes.remove(req.body.noteId);
    await healthOne.save();
    res.redirect(`/health/${req.params.id}`);
  } catch (err) {
    console.error(err);
    res.redirect(`/health/${req.params.id}`);
  }
}

async function create(req, res) {
  const healthOne = await Health.findById(req.params.id);
  healthOne.notes.push(req.body);
  try {
    await healthOne.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/health/${req.params.id}`);
}
