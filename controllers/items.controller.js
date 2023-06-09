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

  static async aboutPage(req, res) {
    res.render("pages/about");
  }

  static async addPage(req, res) {
    res.render("pages/add");
  }

  static async detailPage(req, res) {
    const resault = await prisma.items.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.render("pages/detail", { items: resault });
  }

  static async editPage(req, res) {
    const resault = await prisma.items.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.render("pages/edit", { items: resault });
  }

  static async addItem(req, res) {
    await prisma.items.create({
      data: {
        thumbnail: req.body.thumbnail,
        name: req.body.name,
        desc: req.body.desc,
        status: req.body.status === "true" ? true : false,
      },
    });

    res.redirect("/list");
  }

  static async deleteItem(req, res) {
    await prisma.items.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.redirect("/list");
  }

  static async updateItem(req, res) {
    await prisma.items.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        thumbnail: req.body.thumbnail,
        name: req.body.name,
        desc: req.body.desc,
        status: req.body.status === "true" ? true : false,
      },
    });
    res.redirect("/list");
  }
}

module.exports = itemsController;
