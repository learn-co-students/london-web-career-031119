class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.integer :time
      t.string :room
      t.string :prize

      t.timestamps
    end
  end
end
