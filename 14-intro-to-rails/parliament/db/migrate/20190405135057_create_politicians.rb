class CreatePoliticians < ActiveRecord::Migration[5.2]
  def change
    create_table :politicians do |t|
      t.string :name
      t.integer :age
      t.boolean :spine
      t.string :party

      t.timestamps
    end
  end
end
