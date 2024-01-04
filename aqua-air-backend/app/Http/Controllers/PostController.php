<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function createMessage(Request $request){
        $incomingMessage = $request->validate([
            'message' => 'required'
        ]);

        $incomingMessage['message'] = strip_tags($incomingMessage['message']);
        Post::create($incomingMessage);
        return response($request['message']);
    }

    public function readMessages(){
        $posts = Post::all();
        return $posts;
    }

    public function editMessage($postId){
        $post = Post::find($postId);
        return $post;
    }

    public function updateMessage(Post $post, Request $request){
        $incomingMessage = $request->validate([
            'message' => 'required'
        ]);

        $incomingMessage['message'] = strip_tags($incomingMessage['message']);
        $post->update($incomingMessage);
    }

    public function deleteMessage(Post $post){
        $post->delete();
    }
}
