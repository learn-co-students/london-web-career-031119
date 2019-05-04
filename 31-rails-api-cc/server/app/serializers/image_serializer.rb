class ImageSerializer < ActiveModel::Serializer
  attributes :id, :url, :name, :like_count, :comments
  has_many :comments
  class CommentSerializer < ActiveModel::Serializer
    attributes :id, :content, :created_at # << just to please Diogo
  end
end
