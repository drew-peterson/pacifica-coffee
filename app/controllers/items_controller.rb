SALT = 42154

class ItemsController < ApplicationController
  before_action :admin_access, only: :admin
  before_action :all_items, only: [:index, :admin]
  before_action :set_item, only: [:show, :edit, :update, :destroy]

  def admin
  end

  def new
    @item = Item.new
  end

  def edit

  end

  def update
    if @item.update(item_params)
      redirect_to '/admin'
    else
      render 'edit'
    end
  end

  def destroy
    @item.destroy
    redirect_to '/admin'
  end

  def create
    @item = Item.new(item_params)
    if @item.save
      # add randomness to item.id
      @item.update(id: (@item.id + SALT))
      redirect_to '/items'
    else
      render 'new'
    end
  end

  def index
  end

  def show
  end

  private

    def all_items
      @items = Item.all
    end

    def set_item
      @item = Item.find(params[:id])
    end

    def item_params
      params.require(:item).permit(:item_name, :item_description, :quantity, :price, :sku, :large_image, :small_image)
    end
end
