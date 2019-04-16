class PostsController < ApplicationController

  def new
    if @current_user
      @post = Post.new
    else
      flash[:notice] = "Please sign in to continue!"
      redirect_to "/login_form"
    end
  end

  def show
    @post = Post.find(params[:id])
    @comment = Comment.new
  end

  def create
    @post = Post.new(post_params)
    @post.author_id = @current_user.id

    @post.save

    redirect_to post_path(@post)
  end

  def add_comment
    post = Post.find(params[:id])

    comment = Comment.create(
      content: params[:comment][:content],
      post: post,
      user_id: @current_user.id
    )

    redirect_to post_path(post)
  end

  private

  def post_params
    params.require(:post).permit(:title, :content)
  end


end
