<?php
//var_dump($_POST);
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require './vendor/autoload.php';
$mail = new PHPMailer(TRUE);
  try {
    $mail->setFrom(htmlentities(strip_tags($_POST['email'])));
    $mail->addAddress('webdev@baileypownell.com');
    $mail->Body='<h1 align=left>Name: ' .htmlentities(strip_tags($_POST['name'])).'<br>Email: '.filter_var($_POST['email'], FILTER_SANITIZE_EMAIL).'<br>Message: '.htmlentities(strip_tags($_POST['message'])).'</h1>';
    $mail->addReplyTo($_POST['email']);
    $mail->isHTML(true);
    $mail->isSMTP();
    $mail->Host='baileypownell.com';
    $mail->SMTPAuth = TRUE;
    $mail->SMTPSecure = 'tls';
    $mail->Username = 'webdev@baileypownell.com';
    $mail->Password='Flavius2937!';
    $mail->Port=587;
    $mail->send();
  }
  catch (Exception $e)
  {
     /* PHPMailer exception. */
     echo $e->errorMessage();
  }
  catch (\Exception $e)
  {
     /* PHP exception (note the backslash to select the global namespace Exception class). */
     echo $e->getMessage();
  }
?>
