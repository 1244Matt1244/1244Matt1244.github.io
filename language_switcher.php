<?php
session_start();

if (isset($_GET['lang'])) {
    $lang = $_GET['lang'];
    $_SESSION['lang'] = $lang;  // Store selected language in session
} else {
    if (!isset($_SESSION['lang'])) {
        $_SESSION['lang'] = 'en';  // Default to English
    }
    $lang = $_SESSION['lang'];
}

// Include the selected language translations
$translations = include("translations/{$lang}.php");  // Assuming translations are in separate files like en.php, de.php, hr.php
echo json_encode($translations);  // Output translations for JavaScript to handle
exit();
?>
