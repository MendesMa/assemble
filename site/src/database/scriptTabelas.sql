-- tabela de cadastro e login ASSEMBLE
-- DROP DATABASE assemble;

CREATE DATABASE assemble;
USE assemble;

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
usuario VARCHAR(45),
email VARCHAR(45),
CONSTRAINT chkEmail CHECK (email LIKE ("%__@__%._%")),
senha CHAR(20)
);


CREATE TABLE filmesAssistidos (
idFilmesAssistidos INT PRIMARY KEY AUTO_INCREMENT,
qtdFilmes int,
fkUsuario INT,
CONSTRAINT fkUsuario FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
)AUTO_INCREMENT = 100;


select * from filmesAssistidos;

select * from usuario;

SELECT qtdFilmes, usuario as nome FROM filmesAssistidos join usuario on fkUsuario = idUsuario;
 SELECT qtdFilmes as quantidade, usuario as nome FROM filmesAssistidos join usuario on fkUsuario = idUsuario;















