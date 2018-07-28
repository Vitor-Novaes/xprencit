class ChangeNameTour < ActiveRecord::Migration[5.1]
  def change
    rename_column :tours, :data, :date_trip
    rename_column :tours, :vagas, :vacancy
  end
end
