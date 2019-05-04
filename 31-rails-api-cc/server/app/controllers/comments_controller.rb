class CommentsController < ApplicationController
  def create
    comment = Comment.new(content: params[:content], image_id: params[:image_id])
    if comment.save
      render json: comment
    else
      render json: {error: 'Unable to create comment.'}, status: 400
    end
  end

  def destroy
    comment = Comment.find_by(id: params[:id])
    if comment
      comment.destroy
      render json: {message: 'Comment successfully deleted.'}
    else
      render json: {error: 'Comment not found.'}, status: 404
    end
  end
end
