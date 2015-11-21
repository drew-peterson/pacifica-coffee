class UsersController < ApplicationController
  include UsersHelper
  def new
  end

  def create
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id    
      redirect_to '/'
    else
      redirect_to '/signup'
    end
  end

  def add_to_cart
    item_id_qty = current_user.cart + params[:item_id] + ',' + params[:item_qty] + ','
    current_user.update(cart: item_id_qty)
    redirect_to '/items', notice: 'Item added'
  end

  def update_cart
    item_id = params[:item_id]
    qty = params[:qty]
    old_qty = params[:old_qty]
    updated_cart = current_user.cart.sub(/#{item_id},#{old_qty},/, "#{item_id},#{qty},")
    current_user.update(cart: updated_cart)
    redirect_to '/users/cart', notice: 'Cart sucessfully updated'
  end

  def destroy_from_cart
  end

  def cart
    find_items
  end

  private
    def user_params
      params.require(:user).permit(:first_name, :last_name, :user_name, :password, :password_confirmation, :email, :phone_number)
    end
end
