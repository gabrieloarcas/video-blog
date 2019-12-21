class PostsController < ApplicationController
  def index
  end

  def posts
    @posts = Post.all
    render json: { data: @posts }
  end

  def create
    post = Post.create(post_params)
    render json: post
  end

  def destroy
    Post.destroy(params[:id])
  end

  def update
    post = Post.find(params[:id])
    post.update_attributes(post_params)
    render json: post
  end

  private

  def post_params
    params.require(:post).permit(:id, :title, :description, :url)
  end
 
end
