class PhotosController < ApplicationController

  before_filter :require_login

  def index
    @current_user = current_user

    respond_to do |format|
      format.html {render :index}
      format.json {render :json => @current_user.photos}
    end
  end

  def show
    @photo = Photo.find(params[:id])
    if @photo.user_id == current_user.id
      render :json => @photo
    else
      render :text => "error", :status => 401
    end
  end

  def destroy
    @photo = Photo.find(params[:id])
    if @photo.user_id == current_user.id
      @photo.destroy
      render :text => "Successfully deleted!"
    else
      render :text => "error", :status => 401
    end
  end

end
