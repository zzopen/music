# music-server  offline

# INSTALL

```shell
1. mkdir server && cd server

2. GO111MODULE=on go install github.com/zeromicro/go-zero/tools/goctl@latest

3. goctl --version

4. goctl api new offline

5. 安装Goctl插件
```

# 按需修改项目
```shell
1. 修改go.mod module 为 github.com/zzopen/music/server/offline

2. 全局修改import

3.引入 gorm

go get -u gorm.io/gorm

go get -u gorm.io/driver/sqlite

go get -u gorm.io/gen


```

# 脑图
- 端口需要找一个本地未被占用的端口
- 动态传入sqlite写入数据路径

# 增加model
- 重新生成query
- autoMigration model

```shell

(function() {
  const express = require("express");

  const fs = require("fs");

  const app = express();

  app.get("/video", function(req, res) {
    let pathSrc = req.query.video;

    let stat = fs.statSync(pathSrc);
    let fileSize = stat.size;
    let range = req.headers.range;
    // fileSize 3332038

    if (range) {
      //有range头才使用206状态码
      let parts = range.replace(/bytes=/, "").split("-");
      let start = parseInt(parts[0], 10);
      let end = parts[1] ? parseInt(parts[1], 10) : start + 999999;

      // end 在最后取值为 fileSize - 1
      end = end > fileSize - 1 ? fileSize - 1 : end;

      let chunksize = end - start + 1;
      let file = fs.createReadStream(pathSrc, {
        start,
        end,
      });
      let head = {
        "Content-Range": `bytes ${start}-${end}/${fileSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": chunksize,
        "Content-Type": "video/mp4",
      };
      res.writeHead(206, head);
      file.pipe(res);
    } else {
      let head = {
        "Content-Length": fileSize,
        "Content-Type": "video/mp4",
      };
      res.writeHead(200, head);
      fs.createReadStream(pathSrc).pipe(res);
    }
  });

  app.listen(6789, () => {
    console.log("localhost:6789");
  });
})();
```
