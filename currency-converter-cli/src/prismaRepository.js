import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class Currency {
    constructor(model) {
        this.model = prisma.currency;
    }

    async getLastRecord() {
        const records = await this.model.findMany({ orderBy: { id: "desc" } });
        return records;
    }

    getRate(id) {
        const rates = this.model.findUnique({ where: { id } });
        return rates;
    }

    create(data) {
        const result = this.model.create({ data });
        return result;
    }
}

export default new Currency();
