<?php
$mailJonas = "mail@jonaskuske.com";
$mailRieke = "mail@riekehelmers.com";
$name = $_POST["name"];
$semester = $_POST["semester"];
$mail = $_POST["mail"];
$fromMail = "phpbuddy@modernui.com";
$subject = "Neue Anmeldung zum Workshop";
$message = "Hallo Rieke und Jonas,
hier ist euer PHP Script. Wie geht's?

Es gibt eine neue Anmeldung zu eurem Workshop:

Name: " . $name . "
Semester: " . $semester . "
Mail-Adresse: " . $mail . "

Juhu!

Liebe Grüße,
euer PHP Script :-)";

echo "Herzlichen Glückwunsch! Die Buchung wurde erfolgreich vorgenommen! Sie erhalten in d
?>en nächsten Tagen eine E-Mail des Vermieters mit Angaben zur Kontoverbindung und weiteren Informationen zur gebuchten Tour.";
// Hier mail Funktion
mail($mailRieke, $subject, $message, "From: $fromMail\r\nBcc: " . $mailJonas);
