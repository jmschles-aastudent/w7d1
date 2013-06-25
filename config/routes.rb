PhotoTagger::Application.routes.draw do
  root :to => "Photos#index"

  resources :friendships, :only => [:destroy]


  resource :session

  resources :users do
    resources :friendships, :only => [:create]
  end

  resources :photos, :except => [:edit] do
    resources :tags, :only => [:create, :index]
  end

  resources :tags, :only => [:destroy, :update]
end