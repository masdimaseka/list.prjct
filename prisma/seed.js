const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const data = [
  {
    thumbnail:"https://s3-alpha.figma.com/hub/file/989421327/c6dcc549-72ea-4eff-ab87-82a4dcdd7032-cover.png",
    name: "MPI Alat Bantu Fotografi",
    desc: "Project membuat media pembelajaran interaktif dengan topik pembahasan Alat Bantu Fotografi",
    status: true,
  },
  {
    thumbnail:"https://s3-alpha.figma.com/hub/file/989421327/c6dcc549-72ea-4eff-ab87-82a4dcdd7032-cover.png",
    name: "MPI Jenis-jenis Power Tools",
    desc: "Project membuat media pembelajaran interaktif dengan topik pembahasan Jenis-jenis Power Tools",
    status: true,
  },
  {
    thumbnail:"https://s3-alpha.figma.com/hub/file/989421327/c6dcc549-72ea-4eff-ab87-82a4dcdd7032-cover.png",
    name: "MPI Phytagoras",
    desc: "Project membuat media pembelajaran interaktif dengan topik pembahasan Phytagoras",
    status: false,
  },
];

async function main(){
  data.forEach(async(items)=>{
    await prisma.items.create({
      data: items,
    })
  })
  console.log("Seed data success")
}

main().then(async ()=>{
    await prisma.$disconnect();
  }).catch(async(e)=>{
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })

