$(function(){
  var PAGE_URL_TEMPLATE = 'https://meshblu.octoblu.com/devices/<%= uuid %>';
  var getPageUrl = _.template(PAGE_URL_TEMPLATE);
  var PAGE_URLS = {
    home:   getPageUrl({uuid: 'b8dd5e31-5ebe-11e4-afb2-df1ff2519113'}),
    second: getPageUrl({uuid: 'b8ddac51-5ebe-11e4-afb2-df1ff2519113'})
  };

  var getPage = function(url, callback){
    $.ajax({
      url: url,
      dataType: 'json',
      headers: {
        'skynet_auth_uuid':  '7d1e3221-5590-11e4-9800-a3e0cec37746',
        'skynet_auth_token': '9tbvksw1o9k3ayvibvne8z7a8fbc5wmi'
      },
      success: function(data){
        callback(null, _.first(data.devices));
      }
    })
  }

  var pageUrlTemplate = _.template();
  getPage(PAGE_URLS.home, function(error, data){
    $('body').html(data.html);
  });

  $('body').on('click', 'a', function($event){
    var uuid, url;
    $event.preventDefault();
    $event.stopPropagation();
    page = $($event.currentTarget).data('page');
    console.log(page);

    getPage(PAGE_URLS[page], function(error, data){
      $('body').html(data.html);
    });
  })
});
