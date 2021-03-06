module.exports = {
  name: 'google-map',

  contentFor: function (type, config) {
    var src, content = '', google = config.googleMap || {}, params = [];
    if (type === 'head') {
      src = "http://maps.googleapis.com/maps/api/js";
      // shouldn't need encoding, but who knows what version format it can handle
      params.push('v=' + encodeURIComponent(google.version || '3'));
      if (google.key) {
        params.push('key=' + encodeURIComponent(google.key));
      }
      content = '<script type="text/javascript" src="' + src + '?' + params.join('&') + '"></script>';
    }

    return content;
  }
};
