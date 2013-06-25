PhotoTagger::Application.routes.draw do
  root :to => "Photos#index"

  resources :users

  resource :session
end