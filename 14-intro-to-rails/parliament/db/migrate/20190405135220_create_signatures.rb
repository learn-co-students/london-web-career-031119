class CreateSignatures < ActiveRecord::Migration[5.2]
  def change
    create_table :signatures do |t|
      t.belongs_to :politician, foreign_key: true
      t.belongs_to :law, foreign_key: true

      t.timestamps
    end
  end
end
