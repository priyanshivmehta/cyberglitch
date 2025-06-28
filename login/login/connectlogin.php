<?php
session_start(); // Start the session
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    // $email = $_POST['email'];
    $password = $_POST['password'];
 
    $conn = new mysqli('localhost', 'root', '', 'orbitron');
    if ($conn->connect_error) {
        die("Connection Failed: " . $conn->connect_error);
    } else {
        $stmt = $conn->prepare("SELECT password FROM users WHERE username = ?");
        if ($stmt) {
            $stmt->bind_param("s", $username);
            $stmt->execute();
            // $stmt->bind_param("s", $email);
            // $stmt->execute();
            $stmt->bind_result($hashed_password);
            if ($stmt->fetch()) {
                if (password_verify($password, $hashed_password)) {
                    // echo "<script>
                    //                 alert('Login successful. Welcome, " . htmlspecialchars($username) . "!');
                    //                 window.location.href='http://172.21.192.1:5501/HomePage.html';
                    //         </script>";
                    echo "<script>
                                    alert('Login successful. Welcome, " . htmlspecialchars($username) . "!');
                                    window.location.href='http://127.0.0.1:5500/Solar3d-2/Solar3d-webd/index-solar.html';
                            </script>";
                    exit();

                } else {
                    echo "Invalid password.";
                }
            } else {
                echo "User not found. Please sign up first.";
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
