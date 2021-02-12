const { Lotties } = require('../models');

const saveLottie = async ({ name, config }) => {
  const created = await Lotties.create({ name, config: JSON.stringify(config) });

  return created;
};

const queryLotties = async () => {
  const lotties = await Lotties.find().sort({ updatedAt: 1 });
  console.log(lotties);
  return lotties;
};

const removeLotties = async (ids) => {
  await Lotties.deleteMany({ id: { $in: ids } });
};

module.exports = {
  saveLottie,
  queryLotties,
  removeLotties,
};
