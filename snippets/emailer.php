<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

$json_params = file_get_contents("php://input");

//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'src/Exception.php';
require 'src/PHPMailer.php';
require 'src/SMTP.php';

if(strlen($json_params) > 1) {
    $decoded_params = json_decode($json_params);

    //Create an instance; passing `true` enables exceptions
    $mail = new PHPMailer(true);

    try {

        //Server settings
        $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
        $mail->isSMTP();                                            //Send using SMTP
        $mail->Host       = 'mail.carmelaramforanechurch.com';             //Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        $mail->Username   = 'info@carmelaramforanechurch.com';               //SMTP username
        $mail->Password   = 'Carmel@123';                           //SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
        $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

        //Recipients
        $mail->setFrom('info@carmelaramforanechurch.com', 'Mount Carmel Forane Church');
        $mail->addAddress('info@carmelaramforanechurch.com', 'Mount Carmel Forane Church');     //Add a recipient

        //Content
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = 'New Contact Information from the Website';
        $mail->Body    = '<p>Hi Team!<br/><br/>We have a new enquiry request from website. Below is the details:<br/><br/>Name: <b>'.$decoded_params->firstName.'</b><br/>Email ID: <b>'.$decoded_params->emailId.'</b><br/>Contact No: <b>'.$decoded_params->contactNo.'</b><br/>Message:<br/><b>'.$decoded_params->message.'</b><br/><br/>Please do the needful.<br/><br/> Thanks,<br/>Bhavya Builders Website</p>';

        $mail->send();
        $response = array("message"=>"Message has been sent successfully");
        echo json_encode($response);
    } catch (Exception $e) {
        $response = array("message"=>"Message could not be sent. Mailer Error: {".$mail->ErrorInfo."}");
        echo json_encode($response);
    }
}
