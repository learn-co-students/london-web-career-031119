class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.string :name
      t.integer :age
      t.text :bio
      t.string :special_skill

      t.timestamps
    end
  end
end
