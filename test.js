require('crypto').randomBytes(6, function(err, buffer) {
    var token = buffer.toString('hex');
    console.log(token);
  });