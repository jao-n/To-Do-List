<?php 

// Define que o tipo de resposta será JSON
header('Content-Type: application/json');

// Obtém a nota enviada via POST
$nota = $_POST['nota'];

// Estabelece a conexão com o banco de dados MySQL
$conexao = mysqli_connect("localhost", "root", "");

// Verifica se a conexão foi bem-sucedida, caso contrário, exibe o erro e encerra a execução
if (!$conexao) {
    die("Erro na conexão: " . mysqli_connect_error());
}

// Cria o banco de dados 'tarefadb' caso ele não exista
$sqlCriarBanco = "CREATE DATABASE IF NOT EXISTS tarefadb";
if (!mysqli_query($conexao, $sqlCriarBanco)) {
    // Se houver erro na criação do banco, exibe a mensagem de erro e encerra
    die("Erro ao criar banco: " . mysqli_error($conexao));
}

// Seleciona o banco de dados 'tarefadb' para trabalhar com ele
mysqli_select_db($conexao, "tarefadb");

// Cria a tabela 'tarefas' caso ela não exista
$sqlCriarTabela = "
    CREATE TABLE IF NOT EXISTS tarefas (
        id INT AUTO_INCREMENT PRIMARY KEY,  -- Campo de ID auto incrementado    
        nota VARCHAR(255) NOT NULL,         -- Campo para armazenar a nota
        data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Campo para armazenar a data de criação (automática)
    )
";

// Verifica se a criação da tabela foi bem-sucedida, se não, exibe o erro
if (!mysqli_query($conexao, $sqlCriarTabela)) {
    die("Erro ao criar tabela: " . mysqli_error($conexao));
}

// Declara a instrução SQL para inserir uma nova nota
$sqlAdicionarNota = "INSERT INTO tarefas (nota) VALUES ('$nota')";

// Executa a instrução SQL e verifica se foi bem-sucedida
if (mysqli_query($conexao, $sqlAdicionarNota)) {
    // Redireciona para a página inicial em caso de sucesso
    header('Location: ../index.html');
} else {
    // Retorna uma mensagem de erro em formato JSON caso a inserção falhe
    echo json_encode(["erro" => "Erro ao inserir nota: " . mysqli_error($conexao)]);
    exit; // Encerra o script após retornar o erro
}

// Fecha a conexão com o banco de dados
mysqli_close($conexao);

/* Resumo do que o código faz:
1. Conexão com o banco de dados:
   - Conecta ao MySQL e verifica se a conexão foi bem-sucedida.
   - Cria o banco de dados 'tarefadb' caso ele não exista.
   - Seleciona o banco de dados para uso.

2. Criação de tabela:
   - Verifica se a tabela 'tarefas' existe e, se não, cria uma nova com os seguintes campos:
     - 'id': Identificador único auto incrementado.
     - 'nota': Campo para armazenar a nota.
     - 'data_criacao': Data e hora automáticas da criação.

3. Inserção de dados:
   - Insere a nova "nota" recebida via POST na tabela 'tarefas'.
   - Em caso de sucesso, redireciona para a página principal.

4. Retorno de erros:
   - Caso ocorram falhas na conexão, criação do banco ou inserção de dados, retorna mensagens de erro detalhadas.

5. Fechamento da conexão:
   - Após a execução de todos os comandos, encerra a conexão com o banco de dados. */

?>
