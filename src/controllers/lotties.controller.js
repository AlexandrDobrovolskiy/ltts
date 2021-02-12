const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { lottieService } = require('../services');

const add = catchAsync(async (req, res) => {
  const lottie = await lottieService.saveLottie(req.body);
  res.status(httpStatus.OK).json(lottie);
});

const list = catchAsync(async (req, res) => {
  const lotties = await lottieService.queryLotties();
  res.status(httpStatus.OK).json(lotties);
});

const remove = catchAsync(async (req, res) => {
  const { ids } = req.body;
  console.log(req.body);
  console.log(ids);
  const lotties = await lottieService.removeLotties(ids);
  res.status(httpStatus.OK).json(lotties);
});

module.exports = {
  add,
  list,
  remove,
};
