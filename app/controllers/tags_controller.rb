class TagsController < ApplicationController

  before_filter :require_login

  def index
    @tags = Tag.where( :photo_id => params[:photo_id] )
    puts @tags
    render :json => @tags
  end

  def create
    @tag = Tag.new(params[:tag])

    if @tag.save
      render :json => @tag
    else
      render :text => "OOPS"
    end
  end

  def destroy
  end

end
