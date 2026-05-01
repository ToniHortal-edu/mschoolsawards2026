jQuery(document).ready(function ($) {

    const lastId = localStorage.getItem('bc_last_clicked_id');

    if (lastId) {
        const target = $('#' + lastId);

        if (target.length) {
            target[0].scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }

        localStorage.removeItem('bc_last_clicked_id');
    }

    $(document).on("click", ".bc-track-click", function (e) {

  const $a    = $(this);
  const url   = $a.attr("href");


  if (!url || url === "#") {
    e.preventDefault();
    return;
  }

  const key   = $a.data("key");
  const label = $a.text().trim();

  $.ajax({
    url: bcTrack.rest_url,
    method: "POST",
    beforeSend: function (xhr) {
      xhr.setRequestHeader("X-WP-Nonce", bcTrack.nonce);
    },
    data: JSON.stringify({
      button_key: key,
      label: label,
      url: url,
      post_id: bcTrack.post_id
    }),
    contentType: "application/json"
  });

});


});
