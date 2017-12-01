<?php

$headersep = "\r\n";
$header = "From: $name <$email>" . $headersep . "Reply-To: $name <$email> . $headersep";
$email = $_POST['email'];
$subject=$_POST['subject'];
$message = "From: $name\n\nMessage: $message\n\nEmail: $email\n\n";
$to ='kgambl3@lsu.edu';

if (!empty ($_POST['email']) && ($_POST['message'])) {
  mail($to, $subject, $message, $header);
echo "Thank you $name, your message has been received.";
exit;
}

if ( (empty ($_POST['email'])) && (empty ($_POST['message'])) ) {
echo "ERROR, you did not fill in the <b>Email</b> and the <b>message</b> body.";
exit;
}

elseif (empty ($_POST['email'])) {
echo "ERROR, you did not fill in your Email address.";
exit;
}

elseif (empty ($_POST['message'])) {
echo "ERROR, you did not fill in the message body.";
exit;
}

?>



