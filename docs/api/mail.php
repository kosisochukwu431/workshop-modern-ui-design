<?php
$mailJonas = "mail@jonaskuske.com";
$mailRieke = "mail@riekehelmers.com";
$name = $_POST["name"];
$semester = $_POST["semester"];
$mail = $_POST["email"];
$fromMail = "workshop@modernui.com";
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

mail($mailRieke, $subject, $message, "From: $fromMail\r\nBcc: $mailJonas");

$subjectConfirm = "Deine Anmeldung zum Workshop";
$messageConfirm = "Hallo " . $name . ",
Vielen Dank für deine Anmeldung zu unserem Workshop.

Hier noch einmal alle Termine im Überblick:
Workshop 1: 28.10.2019,
Workshop 2: 11.11.2019,
Workshop 3: 25.11.2019,
Workshop 4: 09.12.2019

Du bekommst einige Tage vor den Workshops auch noch einmal eine Erinnerungsmail.

Wir freuen uns auf dich!

Liebe Grüße,
Rieke & Jonas";
mail($mail, $subjectConfirm, $messageConfirm, "From: $fromMail");

echo "Vielen Dank für deine Anmeldung! Du wirst in Kürze noch eine Bestätigungsmail erhalten. Wir freuen uns auf dich!";
