ActiveAdmin.register Gallery do
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
  permit_params :title, :carousel, :photo
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end

  form title: "Gallery" do |f|
    f.inputs "New image" do
      f.input :title
      f.input :carousel, as: :radio, collection: [['Sim', true], ['Não', false]] 
      f.input :photo, as: :file
      f.actions
    end
  end
end
