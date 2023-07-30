const Health = require('../models/health');

module.exports = {
  index,
  show,
  new: newHealth,
  create
};

async function index(req, res) {
  const health = await Health.find({});
  res.render('health/index', { health });
}

async function show(req, res) {
  const healthOne = await Health.findById(req.params.id);
  res.render('health/show', { healthOne });
}

function newHealth(req, res) {
  res.render('health/new', { errorMsg: '' });
}

async function create(req, res) {
  try {
    const health = await Health.create(req.body);
    console.log('New health record created:', health);
    res.redirect(`/dashboard`);
  } catch (err) {
    console.log(err);
    res.render('health/new', { errorMsg: err.message });
  }
}
