import { SongEntity, songService } from '@main/storage'

async function createSong() {
  const entity: SongEntity = { name: 'Avid' }

  await songService.save(entity)
}

export { createSong }
