#!/bin/bash

# Copies mizko flat hierarchy files to project hierarchy.

SCRIPT_DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

project_root=$SCRIPT_DIR/../..

if [ -z "$1" ]
  then
    echo "
Usage:	./install_html <html_repo_path> <html_install_location>

	Example:

	./install_html buzz-html views/html
"
    exit
fi

repo=$1
html=$2

# Copy base
base="$html/base"
mkdir -p $base
cp $repo/discover.html $html/base
cp $repo/home-loggedin.html $html/base
cp $repo/search-results.html $html/base
cp $repo/home.html $html/base

# Copy company
company="$html/company"
mkdir -p $company
cp $repo/author-join.html $company
cp $repo/editor.html $company
cp $repo/editor_blank.html $company
cp $repo/layout-editor-styled.html $company
cp $repo/layout-editor.html $company
cp $repo/post.html $company
cp $repo/publication-about-edit.html $company
cp $repo/publication-about.html $company
cp $repo/publication-home-empty.html $company
cp $repo/publication-home-koko.html $company
cp $repo/publication-home-mizko.html $company
cp $repo/publication-profile.html $company
cp $repo/publication-search-results.html $company

company_settings="$company/settings"
mkdir -p $company_settings
cp $repo/manage-authors.html $company_settings
cp $repo/manage-products.html $company_settings
cp $repo/manage-social.html $company_settings
cp $repo/manage-topics.html $company_settings

# Copy onboarding
onboard_company="$html/onboard/company"
mkdir -p $onboard_company
cp $repo/author-create-account.html $onboard_company
cp $repo/checkout.html $onboard_company
cp $repo/invite-authors.html $onboard_company
cp $repo/new-company.html $onboard_company
cp $repo/pick-a-plan.html $onboard_company

onboard_user="$html/onboard/user"
mkdir -p $onboard_user
cp $repo/author-create-account.html $onboard_user/reuse-author-create-account.html
cp $repo/user-flow-create-account.html $onboard_user
cp $repo/user-flow-interests.html $onboard_user
cp $repo/user-flow-login.html $onboard_user
cp $repo/user-flow-newsfeed.html $onboard_user

user="$html/user"
mkdir -p $user
cp $repo/notifications.html $user
cp $repo/user-flow-newsfeed-populated.html $user
cp $repo/user-flow-newsfeed.html $user
cp $repo/user-flow-profile.html $user

user_settings="$user/settings"
mkdir -p $user_settings
cp $repo/settings-account.html $user_settings
cp $repo/settings-notifications.html $user_settings
cp $repo/settings-preferences.html $user_settings
cp $repo/settings-publications.html $user_settings

js=$project_root/public/javascripts
css=$project_root/public/stylesheets
img=$project_root/public/images

# A unique subdir to install images.
img_install_subdir=$img/ui

# References to images from stylesheets
img_sym1=$css/img

# All files refer to project_root/img for images.
img_sym2=$project_root/public/img

# copy images
if [[ ! -e $img_install_subdir ]]; then
	mkdir -p $img_install_subdir
fi
cp -a $repo/img/* $img_install_subdir/

# Copy js
cp $repo/js/app.js $js/

# Copy stylesheet
cp $repo/style.css $css/

# Copy 3rdparty
if [[ ! -e $js/lib ]]; then
	mkdir -p $js/lib
fi
if [[ ! -e $css/lib ]]; then
	mkdir -p $css/lib
fi

cp -a $repo/lib/js/* $js/lib/
cp -a $repo/lib/css/* $css/lib/

# Image symlinks.
if [[ ! -e $img_sym1 ]]; then
	ln -s $img_install_subdir $img_sym1 
fi
if [[ ! -e $img_sym2 ]]; then

	ln -s $img_install_subdir $img_sym2  
fi
