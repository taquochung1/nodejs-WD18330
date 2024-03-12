import Product from '../models/product';

// danh sách sản phẩm
export const getProducts = async (req, res) => {
    try {
        const data = await Product.find();
        if (data.length < 0) {
            return res.status(404).json({ message: "Không có sản phẩm" });
        }
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



export const getProductById = async (req, res) => {
    try {
        const data = await Product.findOne({ _id: req.params.id });
        if (data.length < 0) {
            return res.status(404).json({ message: "Không có sản phẩm" });
        }
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// thêm sản phẩm
export const addProduct = async (req, res) => {
    try {
        const data = await Product(req.body).save();
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// xóa sản phẩm
export const deleteProduct = async (req, res) => {
    try {
        const data = await Product.findOneAndDelete({ _id: req.params.id });
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// cập nhật sản phẩm
export const updateProduct = async (req, res) => {
    try {
        const data = await Product.findOneAndUpdate({ _id: req.params.id },req.body,{new : true});
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};