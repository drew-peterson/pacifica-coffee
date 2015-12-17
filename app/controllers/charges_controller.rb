require_relative '../mailers/order_confirmation_email'

class ChargesController < ApplicationController
  before_action :find_items, :cart_total, only: :new

  include UsersHelper

  def new
        p '' * 80
          p params
        p '' * 80
  end

  def create
    # Amount in cents
    cart_total  
    @amount = @cart_total * 100

    customer = Stripe::Customer.create(
      :email => params[:stripeEmail],
      :source  => params[:stripeToken]
    )

    charge = Stripe::Charge.create(
      :customer    => customer.id,
      :amount      => @amount,
      :description => 'Rails Stripe customer',
      :currency    => 'usd'
    )

    # create an order history
    @order = Order.new(item_ids_quantities: current_user.cart, user_id: current_user.id)
    
    # clear cart upon order history creation
    if @order.save
      current_user.update(cart: '')
    else
      # nothing happens for now
    end

    # send confirmation email
    @email = customer[:email]
    send_order_conformation

  rescue Stripe::CardError => e
    flash[:error] = e.message
    redirect_to new_charge_path
  end
end
