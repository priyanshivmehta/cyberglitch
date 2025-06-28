<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);
 
    $conn = new mysqli('localhost', 'root', '', 'orbitron');
    if ($conn->connect_error) {
        die("Connection Failed: " . $conn->connect_error);
    } else {
        $stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
        if ($stmt) {
            $stmt->bind_param("sss", $username, $email, $hashed_password);
            if ($stmt->execute()) {
                echo "<script>
                                    alert('Registration successful. Welcome, " . htmlspecialchars($username) . "!');
                                    window.location.href='http://127.0.0.1:5500/login/login/loginpage.html';
                            </script>";
            } else {
                echo "Error: " . $conn->error;
            }
            $stmt->close();
        } else {
            echo "Error: " . $conn->error;
        }
        $conn->close();
    }
} else {
    echo "Invalid request method.";
}