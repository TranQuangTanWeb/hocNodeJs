var storage = require('node-persist');

var options = {
	dir: "mydata",
	ttl: 5000  //Thời gian sống: nếu là false thì vĩnh viễn
};
// Khởi tạo (có 2 cách)
// Bất đồng bộ
// storage.init(options, callback).then();
// Đồng bộ
storage.initSync(options);

storage.setItemSync('domain', 'demo.net');

