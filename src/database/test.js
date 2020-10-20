const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');


Database.then(async (db) => {
    // inserir dados na tabela
   await saveOrphanage(db, {
    lat: "-7.9833708",
    lng: "-34.8646496",
    name: "Lar de Maná",
    about: "É uma instituição sem fins lucrativos que trabalha em prol do acolhimento e da reintegração de crianças e adolescentes na faixa dos 0 a 12 anos em situação de vulnerabilidade social e que estejam sob medida de proteção de acolhimento institucional, encaminhadas pela Vara da Infância e Juventude do município de Paulista-PE e pelo Conselho Tutelar.",
    whatsapp: "81993940203",
    images: [
        "http://127.0.0.1:5500/images/home.jpg",
        "http://127.0.0.1:5500/images/lar2.jpg",
        "http://127.0.0.1:5500/images/lar3.jpg",
        "http://127.0.0.1:5500/images/lar4.jpg",
        "http://127.0.0.1:5500/images/lar5.jpg",
        "http://127.0.0.1:5500/images/lar1.jpg"

    ].toString(),
    instructions: "Conheça o trabalho, a equipe e as instalações do Lar Maná",
    opening_hours: "Seg-Sáb das 08:00h até 17:00h",
    open_on_weekends: "0"

})


    // consultar dados da tabela
     const selectedOrphanages = await db.all("SELECT * FROM orphanages")
     console.log(selectedOrphanages)
        const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
        console.log(orphanage)
})