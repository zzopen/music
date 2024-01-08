/**** IpcMainEvent ****/
interface IpcMainEvent<T> {
  event: Electron.IpcMainEvent
  p: T
}

type IpcMainEventListener<T, V> = (e: IpcMainEvent<T>) => Promise<V>

/**** IpcMainInvokeEvent ****/
interface IpcMainInvokeEvent<T> {
  event: Electron.IpcMainInvokeEvent
  p: T
}

type IpcMainInvokeEventListener<T, V> = (e: IpcMainInvokeEvent<T>) => Promise<V>

interface IpcRendererEvent<T> {
  event: Electron.IpcRendererEvent
  p: T
}

type IpcRendererEventListener<T> = (params: IpcRendererEvent<T>) => any

const IpcEvent = {
  TOKEN: {
    GET_TOKEN: 'getToken',
    SET_TOKEN: 'setToken'
  },
  DB_SERVICE: {
    SONG_SERVICE: {
      GET_BY_ID: 'get_by_id',
      INSERT: 'insert',
      UPDATE: 'save',
      DELETE: 'delete'
    }
  },
  MAIN: {},
  RENDERER: {},
  MAIN_WIN: {}
}

export type {
  IpcMainEvent,
  IpcMainEventListener,
  IpcMainInvokeEvent,
  IpcMainInvokeEventListener,
  IpcRendererEvent,
  IpcRendererEventListener
}

export { IpcEvent }
