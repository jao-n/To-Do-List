<?php
    // Define que a resposta vai ser em JSON, essencial para APIs modernas
    header('Content-Type: application/json');

    // Tenta conectar ao banco de dados "tarefadb"
    $conexao = mysqli_connect("localhost", "root", "", "tarefadb");
    if (!$conexao) {
        // Se der erro, manda uma mensagem em JSON e para a execução
        echo json_encode(["erro" => "Falha na conexão com o banco de dados"]);
        exit;
    }

    // Verifica se o método HTTP usado é DELETE 
    if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
        // Pega o corpo da requisição (os dados enviados)
        $input = file_get_contents("php://input");
        $data = json_decode($input, true); // Converte de JSON para array associativo

        // Confirma se o ID da tarefa foi enviado
        if (isset($data['id'])) {
            $id = intval($data['id']); // Garante que o ID seja tratado como número

            // Monta a query para excluir a tarefa com o ID fornecido
            $sql = "DELETE FROM tarefas WHERE id = $id";
            if (mysqli_query($conexao, $sql)) {
                // Sucesso! Informa que deu tudo certo
                echo json_encode(["sucesso" => "Tarefa excluída com sucesso"]);
            } else {
                // Algo deu errado no processo de exclusão
                echo json_encode(["erro" => "Erro ao excluir a tarefa: " . mysqli_error($conexao)]);
            }
        } else {
            // Caso o ID não tenha sido enviado
            echo json_encode(["erro" => "ID não fornecido"]);
        }
    } else {
        // Método HTTP não é suportado (só aceita DELETE)
        echo json_encode(["erro" => "Método não suportado"]);
    }

    // Fecha a conexão com o banco de dados
    mysqli_close($conexao);
    /*Resumo:
Deleta as tarefas de um banco de dados. recebendo o ID da tarefa no corpo da requisição (em JSON), tenta excluir a tarefa no banco e retorna mensagens de sucesso ou erro também no formato JSON. */
?>
