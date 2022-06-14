# frozen_string_literal: true

# Load the Rails application.
require_relative "application"

# Initialize the Rails application.
Rails.application.initialize!

# Sendgrid config
ActionMailer::Base.smtp_settings = {
  user_name: "apikey",
  password: "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",
  domain: "saeloun.com",
  address: "smtp.sendgrid.net",
  port: 587,
  authentication: "plain",
  enable_starttls_auto: true
}
