import mongoose from 'mongoose';
import { removeSpecialCharacters } from '../utils/removeSpecialCharacters';
import { validateCnpj, validatePhone, validateEmail } from '../utils/validators';
const Provider = mongoose.model('Provider');

type ParamsReq = {
    params: {
        id: string;
    }
}

type CreationReq = {
    body: {
        name: string;
        socialReason: string;
        cnpj: string;
        segment: string; 
        address: string; 
        phone: string; 
        email: string;
    }
}

type UpdateReq = {
    params: {
        id: string;
    }
    body: {
        name: string;
        socialReason: string;
        cnpj: string;
        segment: string; 
        address: string; 
        phone: string; 
        email: string;
    }
}

type FindAllReq = {
    query?: {
        name?: string;
        page?: string;
    }
}

export class ProviderController {

    async findAll(req: FindAllReq, res) {
        let { name='', page='1' } = req.query;
        const limit = 15;

        try {
            //@ts-ignore
            const providers = await Provider.paginate({ 
                name: { 
                    '$regex': name.trim(), '$options': 'i' 
                }},{
                    sort: 'name', page, limit
                }
            );
            return res.json(providers);
        } catch(err) {
            return res.status(400).send({error: err});
        }
    }

    async findById(req: ParamsReq, res) {
        const { id } = req.params;

        // Validating if the informed ID is valid
        const error = validateId(id);
        if (error.length > 0)
            return res.status(400).send({error});
        
        try {
            const provider = await Provider.findById(id);

            if (!provider) 
                return res.status(400).send({error: 'No provider was found with the informed ID'});
            
            return res.send(provider);
        } catch(err) {
            return res.status(400).send({error: 'No provider was found with the informed ID'});
        }
    }

    async create(req: CreationReq, res) {
        const { name, socialReason, cnpj, segment, address, phone, email } = req.body;
        const formattedCnpj = removeSpecialCharacters(cnpj);
        const formattedPhone = removeSpecialCharacters(phone);

        // Validating if the informed params are valid
        const error = validateProviderFields(name, socialReason, formattedCnpj, segment, address, formattedPhone, email);

        if (error.length > 0)
            return res.status(400).send({error});

        // Formating object to update
        const newProvider = {
            name,
            socialReason,
            cnpj: formattedCnpj,
            segment,
            address,
            phone: formattedPhone,
            email
        }
        
        try {
            const createdProvider = await Provider.create(newProvider);
            return res.json(createdProvider);
        } catch(err) {
            if (err?.code === 11000) {
                return res.status(400).send({error: 'The informed CNPJ is already registered'});
            } else {
                return res.status(400).send({error: 'An error occurred while trying to register provider'});
            }
        }
    }

    async update(req: UpdateReq, res) {
        const { name, socialReason, cnpj, segment, address, phone, email } = req.body;
        const { id } = req.params;

        // Validating if the informed ID is valid
        let error = validateId(id);
        if (error.length > 0)
            return res.status(400).send({error});

        // Validating if the informed params are valid
        const formattedCnpj = removeSpecialCharacters(cnpj);
        const formattedPhone = removeSpecialCharacters(phone);

        error = validateProviderFields(name, socialReason, formattedCnpj, segment, address, formattedPhone, email);

        if (error.length > 0)
            return res.status(400).send({error});

        // Formating object to update
        const newProvider = {
            name,
            socialReason,
            cnpj: formattedCnpj,
            segment,
            address,
            phone: formattedPhone,
            email
        }
        
        try {
            await Provider.updateOne({ _id: id }, newProvider);

            // Getting the updated provider
            const provider = await Provider.findById(id);
            if (!provider) 
                return res.status(400).send({error: 'No provider was found with the informed ID'});
            
            return res.json(provider);
        } catch(err) {
            if (err?.code === 11000) {
                return res.status(400).send({error: 'The informed CNPJ is already registered'});
            } else {
                return res.status(400).send({error: 'An error occurred while trying to update provider'});
            }
        }
    }

    async delete(req: ParamsReq, res) {
        try {
            const { id } = req.params;

            const error = validateId(id);
            if (error.length > 0)
                return res.status(400).send({error});

            const provider = await Provider.deleteOne({ _id: id });

            if (provider.deletedCount === 0)
                return res.status(400).send({ message: 'The informed provider was not found' });

            return res.status(204).send();
        } catch(err) {
            return res.status(400).send({ message: 'The informed provider was not found' });
        }
    }
}

function validateId(id: string) {
    if (!id) 
        return 'No provider ID was informed';

    if (id.length < 24)
        return 'The provider ID must have at least 24 characters';
    
    return '';
}

function validateProviderFields(name: string, socialReason: string, cnpj: string, segment: string, address: string, phone: string, email: string): string {
    if (!name) 
        return 'Required attribute "name" was not informed';
    if (!socialReason) 
        return 'Required attribute "socialReason" was not informed';
    if (!cnpj)
        return 'Required attribute "cnpj" was not informed';
    if (!segment) 
        return 'Required attribute "segment" was not informed';
    if (!address)
        return 'Required attribute "address" was not informed';
    if (!phone) 
        return 'Required attribute "phone" was not informed';
    if (!email)
        return 'Required attribute "email" was not informed';
    

    if (!validateCnpj(cnpj)) 
        return 'The informed CNPJ is not valid';
    if (!validatePhone(phone)) 
        return 'The informed phone is not valid';
    if (!validateEmail(email)) 
        return 'The informed email is not valid';
    

    if (name.trim().length === 0) 
        return 'Attribute "name" cannot be empty';
    if (socialReason.trim().length === 0) 
        return 'Attribute "socialReason" cannot be empty';
    if (segment.trim().length === 0) 
        return 'Attribute "segment" cannot be empty';
    if (address.trim().length === 0) 
        return 'Attribute "address" cannot be empty';

    return '';
}