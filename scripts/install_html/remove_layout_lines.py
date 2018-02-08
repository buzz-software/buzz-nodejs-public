#! /usr/local/bin/python3

# Import the os module, for the os.walk function
import os, pathlib, sys
 
# Set the directory you want to start from
rootDir = './pug'

rootDir= sys.argv[1]

print ("Pug conversion path: %s" %s rootDir)

for dirName, subdirList, fileList in os.walk(rootDir):
	print('Found directory: %s' % dirName)	
	for fname in fileList:
		if fname.endswith("pug"):
			print("%s" % fname)
			fpath = os.path.join(dirName, fname)
			os.system("sed -i '' 's/doctype html/extends \.\.\/layout/g' %s" % fpath)
			os.system("sed -i '' 's/^  head$/block content/g' %s" % fpath)
			os.system("sed -i '' '/^  body$/d' %s" % fpath)
			os.system("sed -i '' '/lt IE 9/d' %s" % fpath)
			os.system("sed -i '' '/\/\/\<base href/d' %s" % fpath)
			os.system("sed -i '' '/title BUZZ/d' %s" % fpath)
			os.system("sed -i '' '/html(/d' %s" % fpath)
			os.system("sed -i '' '/meta(/d' %s" % fpath)
			os.system("sed -i '' '/link(rel=/d' %s" % fpath)
			os.system("sed -i '' '/script(src=/d' %s" % fpath)
