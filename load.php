<?php
session_start();

if (isset($_SESSION['eq'])) {
  $eq = $_SESSION['eq']; // Odczytaj tablicę eq z sesji
  // ...
  // Zwróć odpowiedź jako JSON
  header('Content-Type: application/json');
  echo json_encode(['eq' => $eq]);
} else {
  http_response_code(404); // Jeśli tablica eq nie istnieje w sesji, zwróć kod błędu 404
}
?>
