#!/bin/bash

# Copies mizko flat hierarchy files to project hierarchy.

SCRIPT_DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

project_root=$SCRIPT_DIR/../..

if [ -z "$1" ]
  then
    echo "
Usage:	./do_all <html_repo_path> <html_install_location>

	Example:

	./do_all buzz-html views/html
"
    exit
fi

pugdir=$project_root/views/pages
repo_dir=$1
html_dir=$2


# Install html files, css, js, image files in right places.
$SCRIPT_DIR/install_html.sh $repo_dir $html_dir

rm -rf $pugdir

# Make a copy of html layout
cp -a $html_dir $pugdir

# Convert it to pug
$SCRIPT_DIR/convert_html_to_pug.py $pugdir

# Remove common lines in pug files. These are already in layout.pug
$SCRIPT_DIR/remove_layout_lines.py $pugdir

# Copy layout file to pug directory.

cp $project_root/views/layout.pug $pugdir
