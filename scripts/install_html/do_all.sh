#!/bin/bash


project_root=../..

pugdir = $project_root/views/pug
html_dir = $project_root/views/html
repo_dir = $project_root/views/buzz-html

# Install html files, css, js, image files in right places.
./install_html_repo.sh $project_root $repo_dir $html_dir

rm -rf $pugdir

# Make a copy of html layout
cp -a $html_dir $pugdir

# Convert it to pug
./convert_html_to_pug.py $pugdir

# Remove common lines in pug files. These are already in layout.pug
./remove_layout_lines.py $pugdir
