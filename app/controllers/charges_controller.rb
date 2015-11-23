class ChargesController < ApplicationController

  include UsersHelper

  def new
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

    Order.create(item_ids_quantities: current_user.cart, user_id: current_user.id)

  rescue Stripe::CardError => e
    flash[:error] = e.message
    redirect_to new_charge_path
  end
end
