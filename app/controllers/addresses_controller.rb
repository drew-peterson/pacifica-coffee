class AddressesController < ApplicationController
  def create
    address = Address.new(address_params)
    if address.save
      redirect_to users_cart_path, notice: 'Address Saved'
      flash[:address_saved] = 'Address is saved'
    else
      # do nothing for now
    end
  end
  private
    def address_params
      p params
      params.require(:address).permit(:nickname, :address, :city, :state, :zip, :user_id)
    end
end
