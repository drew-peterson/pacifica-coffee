# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151210193550) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "addresses", force: :cascade do |t|
    t.string   "nickname"
    t.string   "address"
    t.string   "city"
    t.string   "state"
    t.integer  "zip"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "items", force: :cascade do |t|
    t.string   "item_name"
    t.string   "sku"
    t.string   "large_image"
    t.string   "small_image"
    t.integer  "quantity"
    t.integer  "price"
    t.text     "item_description"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
  end

  create_table "orders", force: :cascade do |t|
    t.string   "item_ids_quantities"
    t.string   "shipping_address"
    t.string   "billing_address"
    t.integer  "user_id"
    t.boolean  "shipped",             default: false
    t.boolean  "requested_return",    default: false
    t.boolean  "return_received",     default: false
    t.boolean  "refunded",            default: false
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "user_name"
    t.string   "password_digest"
    t.string   "email"
    t.string   "phone_number"
    t.boolean  "admin",           default: false
    t.text     "cart",            default: ""
    t.text     "address",         default: ""
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
  end

end
