class AddXYPosToTags < ActiveRecord::Migration
  def change
    add_column :tags, :x_pos, :integer
    add_column :tags, :y_pos, :integer
  end
end
