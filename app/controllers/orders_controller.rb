class OrdersController < ApplicationController
  before_action :find_items, :cart_total, only: :order_history

  include UsersHelper

  # show single order history
  # used in the order history page ajax call
  def show
    @order = Order.find(params[:id])
    find_items(@order.item_ids_quantities) #gets me @items

    # partial for the show page, has to be _show file name, standard show did not work...
    @html = view_context.render 'orders/show', locals: {items: @items}

    respond_to do |format|
      format.html {render :show} #render show page for html requests
      format.json  { render :json => {html: @html} } # Ajax call from order history
    end
  end

  # show all order histories
  def index
    @orders = Order.where(user_id: current_user.id)
    @order_totals = []
    @orders.each do |order|
      cart_total(order.item_ids_quantities)
      @order_totals << @cart_total
    end
  end

  def recent
    order = Order.last
    find_items(order.item_ids_quantities)

    prices = []
    @items.each do |item, qty|
      prices << item.price * qty.to_i
    end

    @total = "$#{ prices.inject(:+) }.00"
    @date = Date.parse("#{order.created_at}")

    # multiple locals have to use {items: @items} in html just @items
    @html = view_context.render 'partials/profile_history_last', locals: {items: @items, date: @date , total: @total}

    respond_to do |format|
      format.json  { render :json => {html: @html, date: @date, total: @total} } # don't do msg.to_json
    end
  end

end
