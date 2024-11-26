var posts=["2024/11/26/Test/","2024/11/10/FirstTryBlog/","2024/11/10/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };