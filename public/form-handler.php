<?php
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullName = $_POST['fullName'] ?? '';
    $phone    = $_POST['phone'] ?? '';
    $email    = $_POST['email'] ?? '';
    $message  = $_POST['details'] ?? '';
    $budget   = $_POST['budget'] ?? '';

    if ($email) {

        $adminTo = "info@shopskey.com";
        $adminSubject = "🚀 New Lead - Contact Form Submission | Shopskey";

        $adminBody = "
        ═══════════════════════════════════════
            📋 NEW LEAD RECEIVED - SHOPSKEY
        ═══════════════════════════════════════
        
        👤 CLIENT INFORMATION:
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        Full Name:     $fullName
        Phone:         $phone
        Email:         $email
        Budget:        " . ($budget ? $budget : 'Not specified') . "
        
        📝 MESSAGE/REQUIREMENTS:
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        $message
        
        ⏰ Received:    " . date('d M Y - h:i A') . "
        
        ═══════════════════════════════════════
        Please follow up with this lead ASAP!
        ═══════════════════════════════════════
        ";

        $adminHeaders = "From: noreply@shopskey.com\r\n";
        $adminHeaders .= "Reply-To: $email\r\n";
        $adminHeaders .= "Content-Type: text/plain; charset=UTF-8\r\n";

        $clientSubject = "Thank You for Contacting Shopskey - We'll Be In Touch Soon!";

        $clientBody = "
        Dear $fullName,

        Thank you for reaching out to Shopskey! We have successfully received your inquiry and truly appreciate your interest in our services.

        📋 YOUR SUBMISSION DETAILS:
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        Name:          $fullName
        Email:         $email
        Phone:         $phone
        Budget:        " . ($budget ? $budget : 'To be discussed') . "
        
        Your Message:
        $message
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        
        🚀 WHAT'S NEXT?
        Our team will review your requirements and get back to you within 24 hours with a detailed response. We're excited to potentially work with you!

        📞 CONTACT INFORMATION:
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        🌐 Website:      https://www.shopskey.com
        📧 Email:        info@shopskey.com
        📱 Phone:        +61-2-6190 8616
        💬 WhatsApp:     +61-2-6190 8616
        
        Follow us:
        📘 Facebook:     https://facebook.com/shopskey
        📸 Instagram:    https://instagram.com/shopskey
        🐦 Twitter:      https://twitter.com/shopskey
        💼 LinkedIn:     https://linkedin.com/company/shopskey

        Best regards,
        The Shopskey Team
        
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        This is an automated response. Please do not reply to this email.
        For immediate assistance, contact us directly at info@shopskey.com
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        ";

        $clientHeaders = "From: Shopskey Team <info@shopskey.com>\r\n";
        $clientHeaders .= "Reply-To: info@shopskey.com\r\n";
        $clientHeaders .= "Content-Type: text/plain; charset=UTF-8\r\n";

        $adminSent = mail($adminTo, $adminSubject, $adminBody, $adminHeaders);

        sleep(1);

        $clientSent = mail($email, $clientSubject, $clientBody, $clientHeaders);

        error_log("Admin email sent: " . ($adminSent ? 'Yes' : 'No'));
        error_log("Client email sent: " . ($clientSent ? 'Yes' : 'No'));
        error_log("Client email address: " . $email);

        if ($adminSent && $clientSent) {
            echo json_encode([
                "status" => "success",
                "message" => "Thank you! Your message has been sent successfully. Please check your email for confirmation."
            ]);
        } else if ($adminSent) {
            echo json_encode([
                "status" => "partial_success",
                "message" => "Your message has been sent to our team. Thank you email confirmation may take a few minutes."
            ]);
        } else {
            echo json_encode([
                "status" => "error",
                "message" => "Sorry, there was an issue sending your message. Please try again or contact us directly."
            ]);
        }
    } else {
        echo json_encode([
            "status" => "error",
            "message" => "Please fill in all required fields (Name, Phone, and Email)."
        ]);
    }
    exit;
}

echo json_encode(["status" => "error", "message" => "Invalid request method"]);
exit;
