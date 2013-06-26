class UsersController < ApplicationController

  def create
    @user = User.new(params[:user])
    if @user.save
      redirect_to "/"
    else
      render :new
    end
  end

  def new
    @user = User.new
  end

  def index
    render :json => current_user.friends.push(current_user)
  end

end
