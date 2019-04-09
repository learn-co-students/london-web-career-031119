class CreateHaters < ActiveRecord::Migration[5.2]
  def change
    create_table :haters do |t|
      t.string :name
      t.belongs_to :player, foreign_key: true

      t.timestamps
    end
  end
end
