#!/bin/bash

# Remove html files installed

SCRIPT_DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

# Fix this path if you move this script elsewhere
project_root=$SCRIPT_DIR/../..

if [ -z "$1" ]
  then
    echo "
Usage:	./remove_html <html_install_location>

	Example:

	./remove_html views/html
"
    exit
fi

html=$1


js=$project_root/public/javascripts
css=$project_root/public/stylesheets
img=$project_root/public/images

# A unique subdir to install images.
img_install_subdir=$img/ui

# References to images from stylesheets
img_sym_1=$css/img

# All files refer to project_root/img for images.
img_sym_2=$project_root/public/img

rm -rf $img_install_subdir
rm $img_sym_1
rm $img_sym_2

rm -rf $html

rm -rf $js/lib
rm -rf $css/lib

rm $css/style.css
rm $js/app.js
