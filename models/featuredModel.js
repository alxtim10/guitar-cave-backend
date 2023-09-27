import mongoose from 'mongoose';

const featuredSchema = mongoose.Schema(
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

const Featured = mongoose.model('Featured', featuredSchema);

module.exports = Featured;