const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { lottieService } = require('../services');

const add = catchAsync(async (req, res) => {
  const lottie = await lottieService.saveLottie(req.body);
  res.status(200).json(lottie);
});

const list = catchAsync(async (req, res) => {
  const lotties = await lottieService.queryLotties();
  res.status(200).json(lotties);
});

module.exports = {
  add,
  list,
};
