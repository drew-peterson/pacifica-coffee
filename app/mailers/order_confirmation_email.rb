require 'net/smtp'

def send_order_conformation
 a = 'variable'
message = <<EOF
From: Joji <FROM@gmail.com>
To: YOU <TO@gmail.com>
Subject: Order Confirmation
Dear #{@email}
Thank you for your order with Pacifica Coffee.
EOF
 
  smtp = Net::SMTP.new('smtp.gmail.com', 587 )
  smtp.enable_starttls
  smtp.start('gmail.com', 'jojigordon@gmail.com', 'joji1234', :login) do |smtp|
          smtp.send_message message, 'jojigordon@gmail.com', @email
  end
end