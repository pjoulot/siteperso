#!/bin/bash

BUILD_PATH="_site"

if [ -d ".git" ]; then
  jekyll build
  
  # Remove useless files
  rm -f "$BUILD_PATH/README.md"
  rm -Rf "$BUILD_PATH/scripts"
  rm -f "$BUILD_PATH/feed.xml"
  rm -Rf "$BUILD_PATH/releases"
  rm -Rf "$BUILD_PATH/conf"
else
  echo "You must be in the root git folder to execute the build script."
fi