class SessionsController < ApplicationController

  def new
    @disable_nav = true
  end

  # create new login session
  def create
    user = User.find_by(user_name: params[:user_name])
    # If the user exists AND the password entered is correct.
    if user && user.authenticate(params[:password])
      # Save the user id inside the browser cookie. This is how we keep the user
      # logged in when they navigate around our website.
      session[:user_id] = user.id
      redirect_to '/items'
    else
    # If user's login doesn't work, send them back to the login form.
      flash[:no_user_found] = 'Incorrect Username or Password'
      redirect_to '/login'
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to '/'
  end
end



