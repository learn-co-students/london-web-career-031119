class CreateImages < ActiveRecord::Migration[5.2]
  def change
    create_table :images do |t|
      t.string :name
      t.string :url
      t.integer :like_count

      t.timestamps
    end
  end
end
