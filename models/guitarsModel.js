import mongoose from 'mongoose';

const guitarsSchema = mongoose.Schema(
    {
        id : {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: [true, "Please enter a product name: "]
        },
        price: {
            type: Number,
            required: true
        },
        image: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
)

const Guitars = mongoose.model('Product', guitarsSchema);

export default Guitars;