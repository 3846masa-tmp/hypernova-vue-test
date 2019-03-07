class HomeController < ApplicationController
  around_action :hypernova_render_support

  def index
    @user = {
      :name => 'John Smith'
    }
  end
end
