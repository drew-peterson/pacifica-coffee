Rails.application.routes.draw do

  root 'welcome#index'

  # user creation
  get '/signup' => 'users#new'
  post '/users' => 'users#create'

  # cart
  get '/users/cart' => 'users#cart'
  post '/users/cart' => 'users#proceed'
  get '/users/cart/checkout' => 'users#checkout'
  post '/users/cart/update' => 'users#update_cart'
  delete '/users/cart' => 'users#destroy_from_cart'
  post '/users/cart' => 'users#add_to_cart'

  # order history
  get '/orders' => 'orders#index'
  get '/orders/:id' => 'orders#show'
  # without /last it does not work, it tries to go do #show, unless i place before show... /recent before #show works, after Nope unless recent/last -- this is for jquery ajax
  get '/orders/recent/last' => 'orders#recent'

  # login
  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'

  # save user address
  post '/addresses' => 'addresses#create'

  # for Strip payment
  resources :charges

  resources :items


  # Custom admin view...
  get '/admin' => 'items#admin'

end
