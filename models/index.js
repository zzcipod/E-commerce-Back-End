// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongTo(Category,{foreignKey:'id',});
// Categories have many Products
Product.hasMany(Product,{foreignKey:'category_id',});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag,{through:ProductTag});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Products,{through:ProductTag});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
