const Order = require('../models/orderModel');
const Product = require('../models/productModel');

// Crear un nuevo pedido
exports.createOrder = async (req, res) => {
  try {
    const products = await Product.find({ '_id': { $in: req.body.products } });
    const totalAmount = products.reduce((total, product) => total + product.price, 0);

    const order = new Order({
      products: req.body.products,
      totalAmount
    });

    const newOrder = await order.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener todos los pedidos
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('products');
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
