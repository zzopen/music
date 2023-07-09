import emitter from './index'

function emitPlay(callback: () => void) {
    emitter.emit("play");
}

function emitPause(callback: () => void) {
  emitter.emit("play");
}

export function emitClear() {
  emitter.all.clear();
}

export { emitPlay, emitPause };

// const emitter: Emitter<Events> = mitt<Events>();

// export function emitRoute(r: RouteLocationNormalized) {
//   emitter.emit("app_route_change", r);
// }

// export function listenerRoute(
//   callback: (route: RouteLocationNormalized) => void
// ) {
//   emitter.on("app_route_change", callback);
// }

// 