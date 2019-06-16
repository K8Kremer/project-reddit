var uniqueId = 0;
//create post functionality


$('.post-button').click(function(){
  uniqueId ++;
  var $postText = $('#user-post-text').val();
  var $userName = $('#user-post-name').val();
  $('.list-group-flush').append('<li class = "list-group-item">'
    + '<button type="button" class="btn btn-primary btn-sm remove-button"> remove</button>'
    + '<button type="button" class="btn btn-primary btn-sm comment-button"> comments</button>'
    + $postText + '<br>' + "Posted By: "
    + '<b>'+$userName +'</b>'
    + '<div class = "collapse comments-display card card-body">'
    + '<ul id="comments' + uniqueId +'">'+'</ul>'
    + '<input type="text" class ="comment-text" placeholder="Comment Text"> <input type="text" placeholder="User Name" class="comment-user">'
    + '<button type="button" class="btn btn-primary btn-sm post-comment-button"> Post Comment</button>'
    + '</div>' + '</li>');

});



//event listeners - remove, comment toggle, post comment
$('.list-group-flush').on('click', '.remove-button', function(){
  var postToDelete = $(this).closest('.list-group-item');
  postToDelete.remove();
});

//comment toggle, event delegation so ul is listening for clicks bubbling up from new comment buttons
  $('.list-group-flush').on('click', '.comment-button', function(){
    var commentsToToggle = $(this).siblings('.comments-display');
    commentsToToggle.toggle();
  });

$('.list-group-flush').on('click', '.post-comment-button', function(){
  $("#comments" + uniqueId).append('<li class="list-unstyled">' + $('.comment-text').val()
  + " Posted By: " + $('.comment-user').val()
  + '<i class="fas fa-times"></i>' + '</li>');
});

$('.list-group-flush').on('click', '.fa-times', function(){
  var commentToDelete = $(this).closest('.list-unstyled');
  commentToDelete.remove();
});
