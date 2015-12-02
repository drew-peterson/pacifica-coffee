Rails.configuration.stripe = {
  :publishable_key => ENV['PUBLISHABLE_KEY'],
  :secret_key      => ENV['SECRET_KEY']
}

Stripe.api_key = Rails.configuration.stripe[:secret_key]

# PUBLISHABLE_KEY=pk_test_uksl51zPIOATT1torKitrzfN SECRET_KEY=sk_test_dLVNZ2c2HOfN6Ff5dcV1NbcF rails s
