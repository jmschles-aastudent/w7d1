class PhotosController < ApplicationController

  before_filter :require_login

  def index
    @current_user = current_user

    respond_to do |format|
         format.html {render :index}
         format.json {render :json => Photo.where(:user_id => @current_user.id)}
    end

  end

end
