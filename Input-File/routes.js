const multer = require('./src/app/middleware/multer') // necessário para poder receber o req.file ou req.files

routes.post("/admin/recipes",multer.array('images', 5), recipes.post); // array = req.files
routes.put("/admin/recipes",multer.single('images'/* id do Input no form */), recipes.put); // single = req.file