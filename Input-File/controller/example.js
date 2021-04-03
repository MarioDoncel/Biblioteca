async show(req, res) {
    let recipeId = req.params.id

    let results = await Recipe.find(recipeId)
    const recipe = results.rows[0]
    
    if(!recipe) return res.send ('Recipe não encontrado!')

    recipe.ingredients = formatList(recipe.ingredients)
    recipe.preparation = formatList(recipe.preparation)

    results = await Recipe.recipeFiles(recipeId)
    const recipeFiles = results.rows //{ id: 1, recipe_id: 12, file_id: 2 } { id: 2, recipe_id: 12, file_id: 3 }
    
    const filesPromise = recipeFiles.map( recipeFile => Recipe.files(recipeFile.file_id)) 
    results = await Promise.all(filesPromise) // resulta em um array de results que para colher resultado usar map ou forEach
    // results.forEach(results => console.log(results.rows[0]))
    let files = results.map(results=>results.rows[0])
    files = files.map(file => ({
        ...file,
        src:`${req.protocol}://${req.headers.host}${file.path.replace('public','')}`
    }))
    
    return res.render("admin/recipes/show", {recipe, files})
},
async edit(req, res) {
    let recipeId = req.params.id

    let results = await Recipe.find(recipeId)
    const recipe = results.rows[0]

    if(!recipe) return res.send ('Recipe não encontrado!')
        
    recipe.ingredients = formatList(recipe.ingredients)
    recipe.preparation = formatList(recipe.preparation)

    results = await Recipe.chefOptions()
    const chefs = results.rows

    results = await Recipe.recipeFiles(recipeId)
    const recipeFiles = results.rows //{ id: 1, recipe_id: 12, file_id: 2 } { id: 2, recipe_id: 12, file_id: 3 }
    
    const filesPromise = recipeFiles.map( recipeFile => Recipe.files(recipeFile.file_id)) 
    results = await Promise.all(filesPromise) // resulta em um array de results que para colher resultado usar map ou forEach
    // results.forEach(results => console.log(results.rows[0]))
    let files = results.map(results=>results.rows[0])
    files = files.map(file => ({
        ...file,
        src:`${req.protocol}://${req.headers.host}${file.path.replace('public','')}`
    }))
    
    return res.render("admin/recipes/edit", {recipe, recipeId, chefs, files})