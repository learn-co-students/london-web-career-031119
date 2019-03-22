class CreateFansAndFandoms < ActiveRecord::Migration[5.2]
  def change
    create_table :fans do |t|
      t.string :name
    end

    create_table :fandoms do |t|
      t.integer :fan_id
      t.integer :artist_id
    end
  end
end
