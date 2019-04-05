class CreateLaws < ActiveRecord::Migration[5.2]
  def change
    create_table :laws do |t|
      t.string :name
      t.text :description
      t.integer :year

      t.timestamps
    end
  end
end
