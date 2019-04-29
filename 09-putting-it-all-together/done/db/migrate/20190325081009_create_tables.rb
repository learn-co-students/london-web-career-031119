class CreateTables < ActiveRecord::Migration[5.2]
  def change
    create_table :artists do |t|
      t.string :name
      t.timestamps
    end

    create_table :fans do |t|
      t.string :name
      t.timestamps
    end

    create_table :tracks do |t|
      t.string :title
      t.integer :artist_id
      t.timestamps
    end

    create_table :fandoms do |t|
      t.integer :artist_id
      t.integer :fan_id
      t.timestamps
    end
  end
end
