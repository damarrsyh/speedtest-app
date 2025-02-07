// const jsonServer = require("json-server");
// const server = jsonServer.create();
// const router = jsonServer.router("db.json"); // Ambil data dari db.json
// const middlewares = jsonServer.defaults();

// server.use(middlewares);

// // Custom API endpoint untuk `devices`
// server.get("/devices", (req, res) => {
//   const db = router.db; // Dapatkan database JSON Server
//   const devices = db.get("devices").value(); // Ambil data devices

//   res.status(200).json({
//     code: 200,
//     status: "success",
//     data: devices, // Ubah struktur data agar menyerupai API utama
//   });
// });

// // Gunakan router JSON Server untuk endpoint lainnya
// server.use(router);

// // Jalankan server di port 5000
// const PORT = 5000;
// server.listen(PORT, () => {
//   console.log(`JSON Server is running at http://localhost:${PORT}`);
// });
