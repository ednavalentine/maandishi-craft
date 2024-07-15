<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Set recipient email address
    $to = 'maandishicraft@gmail.com';

    // Subject of the email
    $subject = 'New Message from Maandishi Craft Contact Form';

    // Compose the email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    // Set headers
    $headers = "From: $name <$email>";

    // Send email
    if (mail($to, $subject, $email_content, $headers)) {
        // Email sent successfully
        echo '<p>Thank you for contacting us, '.$name.'. We will get back to you soon!</p>';
    } else {
        // Email sending failed
        echo '<p>Sorry, there was an error sending your message. Please try again later.</p>';
    }
} else {
    // If the request method is not POST, show an error message
    echo '<p>Oops! Something went wrong. Please try again.</p>';
}
?>
