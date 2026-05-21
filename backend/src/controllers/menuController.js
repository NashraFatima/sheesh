const Menu = require("../models/Menu");
const { AppError } = require("../utils/AppError");
const { asyncHandler } = require("../utils/asyncHandler");
const { buildPagination, buildSort, paginationPayload } = require("../utils/query");
const { formatMenuItem } = require("../services/formatters");

const createMenuItem = asyncHandler(async (req, res) => {
  const item = await Menu.create(req.body);
  res.status(201).json({ success: true, item: formatMenuItem(item) });
});

const getMenuItems = asyncHandler(async (req, res) => {
  const { page, limit, skip } = buildPagination(req.query);
  const filter = {};
  if (req.query.category) filter.category = req.query.category;
  if (req.query.subcategory) filter.subcategory = req.query.subcategory;
  if (req.query.featured) filter.featured = req.query.featured === "true";
  if (req.query.isAvailable) filter.isAvailable = req.query.isAvailable === "true";
  if (req.query.search) filter.$text = { $search: req.query.search };

  const [items, total] = await Promise.all([
    Menu.find(filter).sort(buildSort(req.query, "category title")).skip(skip).limit(limit),
    Menu.countDocuments(filter),
  ]);

  res.json({
    success: true,
    items: items.map(formatMenuItem),
    pagination: paginationPayload({ page, limit, total }),
  });
});

const getMenuItem = asyncHandler(async (req, res) => {
  const item = await Menu.findById(req.params.id);
  if (!item) throw new AppError("Menu item not found.", 404);
  res.json({ success: true, item: formatMenuItem(item) });
});

const updateMenuItem = asyncHandler(async (req, res) => {
  const item = await Menu.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!item) throw new AppError("Menu item not found.", 404);
  res.json({ success: true, item: formatMenuItem(item) });
});

const deleteMenuItem = asyncHandler(async (req, res) => {
  const item = await Menu.findByIdAndDelete(req.params.id);
  if (!item) throw new AppError("Menu item not found.", 404);
  res.status(204).send();
});

module.exports = {
  createMenuItem,
  getMenuItems,
  getMenuItem,
  updateMenuItem,
  deleteMenuItem,
};
