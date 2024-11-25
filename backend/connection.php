<?php

header('Content-Type: application/json');
$nota = $_POST['nota'];

$conexao = mysqli_connect("localhost", "root", "", "tarefadb");
if (!$conexao) {
    die("Connection failed: " . mysqli_connect_error());
}


$sqlAdicionarNota = "INSERT INTO tarefas (nota) VALUES ('$nota')";

// if (mysqli_query($conexao, $sql)) {
//     // print "Dados cadastrados com sucesso";
//     header('Location: ../index.html');
// } else {
//     print "Error: " . $sql . "<br>" . mysqli_error($conexao);
// }

if (mysqli_query($conexao, $sqlAdicionarNota)) {
    // Insere a nota no banco
    $sql = "INSERT INTO tarefas (nota) VALUES ('$nota')";

    header('Location: ../index.html');
} else {
    echo json_encode(["erro" => "Erro ao inserir nota: " . mysqli_error($conexao)]);
        exit;
}
mysqli_close($conexao);
?>



