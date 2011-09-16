class CreateToDoItems < ActiveRecord::Migration
  def change
    create_table :to_do_items do |t|
      t.string :Item
      t.date :DueDate
      t.boolean :Completed

      t.timestamps
    end
  end
end
