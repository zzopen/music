#!/usr/bin/env bash

function BuildApi() {
    cd /Users/xulei/jungle/githubproject/my/music/packages/server/offline && \
    goctl api go -api ./api/offline.api -dir .
}

BuildApi
