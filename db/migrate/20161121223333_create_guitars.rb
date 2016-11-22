class CreateGuitars < ActiveRecord::Migration
  def change
    create_table :guitars do |t|
      t.string :brand
      t.string :model
      t.string :style
      t.integer :strings

      t.timestamps null: false
    end
  end
end
