'use strict';

const { Contract } = require('fabric-contract-api');

class ResearchInstituteAccessControlContract extends Contract {
    constructor() {
        super('ResearchInstituteAccessControlContract');
    }

    async instantiate() {
        // function that will be invoked on chaincode instantiation
    }

    async createUser(ctx, address, accessLevel) {
        const researchInstituteAccessControlObject = {
            accessLevel: accessLevel
        };
        const buffer = Buffer.from(JSON.stringify(researchInstituteAccessControlObject));
        await ctx.stub.putState(address, buffer);
        return { success: 'ok' };
    }

    async getAccessLevel(ctx, address) {
        const buffer = await ctx.stub.getState(address);
        if (!buffer || !buffer.length) {
            return { error: 'not found' };
        }

        const researchInstituteAccessControlObject = JSON.parse(buffer);
        return { success: 'ok', data: researchInstituteAccessControlObject.accessLevel };
    }
}

exports.contracts = [ResearchInstituteAccessControlContract];
