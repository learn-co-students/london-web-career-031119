class User < ApplicationRecord

  
  has_many :written_posts, class_name: "Post", foreign_key: "author_id"
  has_many :comments

  has_secure_password

  # def password=(password)
  #   hashed_pw = BCrypt::Password.create(password).to_s
  #   self.password_digest = hashed_pw
  # end

  # def authenticate(password)
  #   pw_object = BCrypt::Password.new(self.password_digest)

  #   pw_object == password
  # end

end
