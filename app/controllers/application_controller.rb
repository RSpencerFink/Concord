class ApplicationController < ActionController::Base
  def current_user
    User.find_by(session_token: session[:session_token])
  end

  def log_in(user)
    session[:session_token] = user.reset_session_token!
  end

  def logged_in?
    !!current_user
  end

  def log_out(user)
    session[:session_token] = nil
    user.reset_session_token!
  end

  def require_login
    # Will fill in later
  end
end
