Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # resources :contacts, only: [:new, :create]


  get "contacts/new" => "contacts#new"
  # match '/contacts', to: 'contacts#new', via: 'get'
  resources "contacts", only: [:new, :create]

  resources :tours, only: [:new, :create, :edit, :update, :destroy]
  resources :videos, only: [:new, :create, :edit, :update, :destroy]
  resources :contacts
  resources :gallery, only: [:index]
  resources :investment, only: [:index]
  resources :accommodation, only: [:index]
  resources :about, only: [:index]
  root "home#index"
end
