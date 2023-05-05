const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class itemsController {
  static async indexPage(req, res) {
    const resault = await prisma.items.findMany();
    res.render("pages/index", { items: resault });
  }
  static async listPage(req, res) {
    const resault = await prisma.items.findMany();
    res.render("pages/list", { items: resault });
  }
}

module.exports = itemsController;
