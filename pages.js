var pages = [
  {
    name: 'home',
    html: '<div class="container"><div class="row"><div class="col-xs-12 col-md-offset-4 col-md-4"><h1>Hello World</h1><p> This is a meshblu demo site, with HTML served up entirely by Meshblu. You should check out <a href data-page="second">page two</a></p></div></div></div>'
  },
  {
    name: 'second',
    html: '<div class="container"><div class="row"><div class="col-xs-12 col-md-offset-4 col-md-4"><h1>Page two</h1><p>Is this not this lovely?</p></div></div></div>'
  },
];

pages.forEach(function(page){
  var device = {
    type: 'page',
    owner: '7d1e3221-5590-11e4-9800-a3e0cec37746',
    name: page.name,
    html: page.html
  };

  conn.register(device,function(data){
    console.log(data.name, data.uuid);
  });
});

