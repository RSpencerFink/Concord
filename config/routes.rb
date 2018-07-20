Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

   root to: 'static_pages#root'

    namespace :api, defaults: { format: 'json' } do
      resource :session, only: [:new, :create, :destroy]
      resources :users, only: [:new, :create, :show, :index]
      resources :servers do
        resources :channels do
          resources :messages, only: [:create, :index, :show]
        end
      end
      resources :server_memberships, only: [:create, :destroy]
    end

end
