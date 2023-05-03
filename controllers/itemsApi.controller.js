const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class itemsApicontroller {
  static async getItems(req, res) {
    const resault = await prisma.items.findMany({});
    res.status(200).json(resault);
  }

  static async getDetailItems(req, res) {
    const resault = await prisma.items.findUnique({
      where: { id: Number(req.params.id) },
    });
    if (resault == null) {
      res.status(404).json({ msg: "Data Not Found" });
    } else {
      res.status(200).json(resault);
    }
  }

  static async addItems(req, res) {
    const resault = await prisma.items.create({
      data: {
        thumbnail: req.body.thumbnail,
        name: req.body.name,
        desc: req.body.desc,
        status: req.body.status,
      },
    });
    res.status(201).json(resault);
  }

  static async editItems(req, res) {
    const resault = await prisma.items.update({
      where: { id: Number(req.params.id) },
      data: {
        thumbnail: req.body.thumbnail,
        name: req.body.name,
        desc: req.body.desc,
        status: req.body.status,
      },
    });
    res.status(200).json(resault);
  }

  static async deleteItems(req, res) {
    const resault = await prisma.items.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(resault);
  }
}

module.exports = itemsApicontroller;
