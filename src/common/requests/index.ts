import axios from 'axios'

function aa() {
  const a = axios.create({ baseURL: 'http://localhost:8999' })
  a.get('/api/hello').then(() => {
    console.log('axios success')
  })
}

export { aa }
