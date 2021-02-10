const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { lottieService } = require('../services');

const add = catchAsync(async (req, res) => {
  const lottie = await lottieService.saveLottie(req.body);
  res.status(httpStatus.CREATED).json(lottie);
});

const list = catchAsync(async (req, res) => {
  const lotties = await lottieService.queryLotties();
  res.status(httpStatus.FOUND).json(lotties);
});

module.exports = {
  add,
  list,
};
