class UsersController < ApplicationController
  before_action :authorize, only: :add_to_cart
  before_action :find_items, :cart_total, only: [:cart, :checkout]

  include UsersHelper
  def new
   @disable_nav = true;
  end
  
  # create new user
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
    # check if the item is already in cart
    if current_user.cart.split(',').include?(params[:item_id])

      flash[:already_in_cart] = 'Item already in cart'
      redirect_to '/items'
    else
    # Add item.id & desired quantity to user.cart string
      item_id_qty = current_user.cart + params[:item_id] + ',' + params[:item_qty] + ','
      current_user.update(cart: item_id_qty)
       flash[:item_added] = 'Item added'
      redirect_to '/items'
    end
  end

  # look for item quantity by searching with item.id then update quantity under user.cart
  def update_cart
    item_id = params[:item_id]
    qty = params[:qty]
    old_qty = params[:old_qty]
    updated_cart = current_user.cart.sub(/#{item_id},#{old_qty},/, "#{item_id},#{qty},")
    current_user.update(cart: updated_cart)

    flash[:cart_update_success] = 'Cart successfully updated'
    redirect_to '/users/cart'
  end

  # look for item quantity by searching with item.id then remove item.id and quantity under user.cart
  def destroy_from_cart
    item_id = params[:item_id]
    updated_cart = current_user.cart.sub(/#{item_id},\d+,/, "")
    current_user.update(cart: updated_cart)

    flash[:cart_item_removed] = 'Item removed'
    redirect_to '/users/cart'
  end

  def cart
    @addresses = Address.where(user_id: current_user.id)
  end

  def proceed
    redirect_to new_charge_path
  end
  
  def checkout
  end

  private
    def user_params
      params.require(:user).permit(:first_name, :last_name, :user_name, :password, :password_confirmation, :email, :phone_number)
    end
end
