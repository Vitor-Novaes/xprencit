class CreateTours < ActiveRecord::Migration[5.1]
  def change
    create_table :tours do |t|
      t.string :local
      t.datetime :data
      t.integer :vagas
      t.string :photo
      t.text :description

      t.timestamps
    end
  end
end
