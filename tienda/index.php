<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

if(isset($_GET['ruta']))
{
    $servidor = 'mysql:host=localhost;dbname=tienda';
    $usuario = 'root';
    $contraseña = '';
    $tabla= explode('/',$_GET['ruta']);

    $pdo = new PDO($servidor, $usuario, $contraseña);

    $sql = "SELECT * FROM ".$tabla[0];
    $stmt = $pdo->query($sql);
    $resultados = $stmt->fetchAll(PDO::FETCH_ASSOC);
}
else
$resultados=array();

echo json_encode($resultados);