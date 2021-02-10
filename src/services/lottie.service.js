const { Lotties } = require('../models');

const saveLottie = async ({ name, config }) => {
  const created = await Lotties.create({ name, config });

  return created;
};

const queryLotties = async () => {
  const lotties = await Lotties.find();

  return lotties;
};

module.exports = {
  saveLottie,
  queryLotties,
};
