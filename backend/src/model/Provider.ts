import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const ProviderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    socialReason: {
        type: String,
        required: true
    },
    cnpj: {
        type: String,
        required: true, 
        unique: true
    },
    segment: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

ProviderSchema.plugin(mongoosePaginate);

mongoose.model('Provider', ProviderSchema);