class CreateBands < ActiveRecord::Migration[5.2]
  def change
    create_table :bands do |t|
      t.string :name
      t.string :instrument_type
      t.string :home_city
      t.integer :number_of_members
      t.boolean :active

      t.timestamps
    end
  end
end
