const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/views/uploads', express.static('uploads')); // Để phục vụ hình ảnh
app.use('/api/products', productRoutes);

// Phục vụ các file tĩnh trong thư mục "public"
app.use(express.static(path.join(__dirname, 'views')));

// Route để trả về file index.html
app.get('/views/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.get('/views/admin.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'admin.html'));
});

// Kết nối MongoDB
mongoose
  .connect('mongodb://localhost:27017/product', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

// Thiết lập port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
