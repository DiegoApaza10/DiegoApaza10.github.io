src="https://code.jquery.com/jquery-3.6.0.min.js"
src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"

  $(document).ready(function() {
    $("img").click(function() {
      var t = $(this).attr("src");
      $(".modal-body").html("<img src='" + t + "' class='modal-img'>");
      $("#myModal").modal();
    });

    $("video").click(function() {
      var v = $("video > source");
      var t = v.attr("src");
      $(".modal-body").html("<video class='model-vid' controls><source src='" + t + "' type='video/mp4'></source></video>");
      $("#myModal").modal();
    });
  });
