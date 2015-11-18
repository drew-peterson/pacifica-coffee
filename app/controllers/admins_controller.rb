class AdminsController < ApplicationController
  # uncomment below line for any controller that wants to be secured / require login
  # before_filter :authorize 

  def new
  end

  def create
    admin = Admin.new(admin_params)
    if admin.save
      session[:admin_id] = admin.id    
      redirect_to '/'
    else
      redirect_to '/signup'
    end
  end

  private
    def admin_params
      params.require(:admin).permit(:first_name, :last_name, :user_name, :password, :password_confirmation, :email, :phone_number)
    end
end
