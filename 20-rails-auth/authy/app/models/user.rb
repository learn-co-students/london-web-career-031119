class User < ApplicationRecord

  # def password=(password)
  #   hashed_pw = BCrypt::Password.create(password).to_s
  #   self.password_digest = hashed_pw
  # end

  # def authenticate(password)
  #   pw_object = BCrypt::Password.new(self.password_digest)

  #   pw_object == password
  # end


  has_secure_password

end
