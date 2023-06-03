var database = require("../database/config");

function buscarUltimasMedidas(idUsuario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        qtdFilmes as Quantidade_Filmes,
                    from filmesAssistidos
                    where fkUsuario = ${idUsuario}
                    order by idFilmesAssistidos desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select
        qtdFilmes as Quantidade_Filmes,
                    from filmesAssistidos
                    where fkUsuario = ${idUsuario}
                    order by idFilmesAssistidos desc limit ${limite_linhas}`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idUsuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1
        qtdFilmes as Quantidade_Filmes,
                            fkUsuario 
                        from filmesAssistidos where fkUsuario = ${idUsuario} 
                    order by id desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        qtdFilmes as Quantidade_Filmes,
                        fkUsuario 
                        from filmesAssistidos where fkUsuario = ${idUsuario} 
                    order by idFilmesAssistidos desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
