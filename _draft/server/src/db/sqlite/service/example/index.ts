import { SongModel } from '@main/server/src/db/sqlite/model'
import { songService } from '@main/server/src/db/sqlite'
async function __test__() {
  // await testInsert()
  // await search()
}

async function search() {
  // const res = await songService.getById(1)
  const res = await songService.getByIds([1, 2, 3])
  console.log('res:', res)
}

async function testInsert() {
  const datas = [
    new SongModel({
      name: 'Avid',
      songPath: '/Users/xulei/Downloads/data/songs_cache/default/Avid.mp3',
      lyricPath: '/Users/xulei/Downloads/data/songs_cache/default/Avid.lrc'
    }),
    new SongModel({
      name: 'LilaS',
      songPath: '/Users/xulei/Downloads/data/songs_cache/default/LilaS.mp3',
      lyricPath: '/Users/xulei/Downloads/data/songs_cache/default/LilaS.lrc'
    }),
    new SongModel({
      name: '屋顶',
      songPath: '/Users/xulei/Downloads/data/songs_cache/default/屋顶.mp3',
      lyricPath: '/Users/xulei/Downloads/data/songs_cache/default/屋顶.lrc'
    })
  ]
  for (const data of datas) {
    await data.save()
  }

  console.log('测试数据插入成功')
}
export default { __test__ }
