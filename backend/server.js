const express = require("express");
const app = express();
const cors = require("cors");
const stripe = require("stripe")("sk_test_51PJ7TISDGm3VSLieVxo7XiQLToesyvcJXy3GL0nFU5JXJGmPY4y8Q9mCTLNkydnuSs1zzW7Ar6M8FxjehYwx4kQa00kNbD83L8");

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("server running");
});

app.post("/api/create-checkout-session", async (req, res) => {
    const { product } = req.body;
    

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [{
                price_data: {
                    currency: "inr",
                    product_data: {
                        name: product.Name,
                    },
                    unit_amount: product.Amount * 100,
                },
                quantity: 1,
            }],
            mode: "payment",
            success_url: "https://frontendpart.vercel.app/success",
            cancel_url: "https://frontendpart.vercel.app/failure",
        });

        res.json({ id: session.id });
    } catch (error) {
        console.error(error);
        
        res.status(500).send('Something went wrong');
    }
});

app.listen(7000, () => {
    console.log("server start");
});