import Address from "../models/Address.js";

// Add Address : /api/address/add
export const addAddress = async (req, res) => {
  try {
    const userId = req.user._id;
    const { address } = req.body; // ✅ correctly extract the nested address object

    await Address.create({ ...address, userId });

    res.json({ success: true, message: "Address Added Successfully" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};



// Get Address : /api/address/get
export const getAddress = async (req, res) => {
  try {
    const userId = req.user._id;
    const addresses = await Address.find({ userId });

    res.json({ success: true, addresses });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
