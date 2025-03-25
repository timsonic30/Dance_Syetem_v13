const express = require("express");
const router = express.Router();
const ShoppingCart = require("../models/shoppingCart");
const Authorization = require("../middlewares/authorization");

//==================================================
//tutor-BookThisClassButton, data輸入db
router.post("/addtocart", async (req, res) => {
    try {
        const { productID, collectionName, price, shoppingType, sessionID } = req.body;
        //創建新的購物車物件例子
        const newShoppingCart = new ShoppingCart({
            productID,
            collectionName,
            price,
            shoppingType,
            sessionID,
        });
        newShoppingCart
            .save()
            .then((savedDoc) => {                 
                res.status(201).send({ response: 'ok', savedDoc });
            })
            .catch((e) => {
                console.error('Error saving document:', e);
                res.status(500).send({ error: 'Failed to save document.' });
            });
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).send({ error: 'Failed to save data.' });
    }
});

//==================================================
router.get("/getcart/:sessionID", async (req, res) => {
    try {
        const { sessionID } = req.params;
        const shoppingCart = await ShoppingCart.find({ sessionID });
        res.status(200).send(shoppingCart);
    } catch (error) {
        console.error('Error getting data:', error);
        res.status(500).send({ error: 'Failed to get data.' });
    }
})

//==================================================
// 創建新的購物車物件例子
// const newShoppingCart = new ShoppingCart({
//     productID: new mongoose.Types.ObjectId('67d685dbc56e0f17597cfb4e'), // 假設的 productID
//     collectionName: 'danceclasses', // 假設的 collectionName
//     price: 3000, // 假設價格
//     shoppingType: 'class', // 假設購物類型
//     userID: new mongoose.Types.ObjectId('67d1257e4d1fcb94294fb6af'), // 假設的 userID
//     sessionID: 'session20250325', // 假設的 session ID
//   });
//==================================================
// 將購物車物件存入資料庫例子
// newShoppingCart
//   .save()
//   .then((savedDoc) => {
//     console.log("儲存完畢, 資料是:");
//     console.log(savedDoc);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
//==================================================



//請在這裡寫api






module.exports = router;