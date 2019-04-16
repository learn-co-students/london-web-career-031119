class CommentsController < ApplicationController

  def delete
    @comment = Comment.find(params[:id])
    @post = @comment.post

    if @current_user.id == @post.user.id
      @comment.destroy

    else
      flash[:notice] = "Whoa there! That ain't yours"
    end

    redirect_to post_path(@post)
  end
end
