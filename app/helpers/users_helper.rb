module UsersHelper
  def find_items
    @items = {} 
    current_user.cart.split(',').each_with_index do |num, index|
      if index.even?
        @item_object = Item.find(num.to_i)
      else
        @items[num] = @item_object
      end
    end
  end
end
