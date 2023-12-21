<?
require "phpmailer/src/Exception.php";
require "phpmailer/src/PHPMailer.php";
require "phpmailer/src/SMTP.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

$name = $_POST["name"];
$company = $_POST["company"];
$email = $_POST["email"];
$telno = $_POST["telno"];
$comment = $_POST["comment"];


$mail = new PHPMailer(true);

try {

    $subject = "QUPID Customer Consulting";
    $content = "<p style='line-height:2em'><br />\n"
	. "* 성함 : " . $name . "<br />\n"
	. "* 회사명 : " . $company . "<br />\n"
	. "* 이메일주소 : " . $email . "<br />\n"
	. "* 전화번호 : " . $telno . "<br />\n"
	. "* 남기실 말씀 : <br />\n<div style='margin:10px; padding:15px; border:1px solid #666666;'>" . nl2br(htmlspecialchars($comment)) . "</div>\n</p>\n";



    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->setLanguage('ko','/app/qupid.n2soft.co.kr/phpmailer/language/');
    $mail->Charset = "utf-8";
    $mail->Encoding = "base64";
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'kwanjoong.kim@gmail.com';                     //SMTP username
    $mail->Password   = 'yrebmbougdmeaxhf';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;            //Enable implicit TLS encryption
    $mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('qupid-mailer@n2soft.co.kr', 'QUPID-Mailer');
    $mail->addCustomHeader('Content-Type', 'text/html; charset=utf-8');
    $mail->addAddress("hbchoi@n2soft.co.kr"); 
//    $mail->addCC('sys@n2soft.co.kr');
//    $mail->addCC('whyhow@n2soft.co.kr');
    $mail->addCC('spectator@n2soft.co.kr');
//    $mail->addAddress("spectator@n2soft.co.kr"); 

    //Attachments
//    $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
//    $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = $subject;
    $mail->Body    = $content;
//    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();

?>
<script>
alert("고객 문의가 정상적으로 접수되었습니다.");
location.replace("about:blank");
</script>
<?

}
catch (Exception $e) {

?>
<script>
alert("접수 도중 오류가 발생했습니다. [" . $mail->ErrorInfo . "]");
location.replace("about:blank");
</script>
<?

}

?>
