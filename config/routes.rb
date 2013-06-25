PhotoTagger::Application.routes.draw do
  root :to => "Photos#index"

  resources :friendships, :only => [:destroy]

  resources :photos do
    resources :tags, :only => [:create]
  end

  resource :session

  resources :tags, :only => [:destroy]

  resources :users do
    resources :friendships, :only => [:create]
  end


end