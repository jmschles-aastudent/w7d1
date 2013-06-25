PhotoTagger::Application.routes.draw do
  root :to => "Photos#index"

  resources :friendships, :only => [:destroy]


  resource :session

  resources :tags, :only => [:create, :destroy]

  resources :users do
    resources :photos, :only => [:index, :create, :update]
    resources :friendships, :only => [:create]
  end

  resources :photos, :only => [:destroy]

end