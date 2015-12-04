module UsersHelper
  # find all items in cart and desired quantity
  def find_items(cart = current_user.cart)
    @items = {} 
    cart.split(',').each_with_index do |num, index|
      if index.even?
        @item_object = Item.find(num.to_i)
      else
        @items[@item_object] = num
      end
    end
  end

  def cart_total(cart = current_user.cart)
    find_items(cart)
    prices = []
    @items.each do |item, qty|
      prices << item.price * qty.to_i
    end
    @cart_total = prices.inject(:+)
  end
end

