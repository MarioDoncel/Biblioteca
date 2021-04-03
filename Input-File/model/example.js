
async create({filename, path}, recipeId){
    const query=`
    INSERT INTO files (
        name,
        path
    ) VALUES ($1,$2)
    RETURNING id
    `
    const values = [
        filename,
        path
    ]


async delete(id) {
    try {
        const result = await db.query(`SELECT * FROM files WHERE id = $1`, [id])
        const file = result.rows[0]
        fs.unlinkSync(file.path) // Deletar arquivo fisico da pasta
    } catch (err) {
        console.error(err)
    }  