#! /usr/local/bin/python3

# Import the os module, for the os.walk function
import os, pathlib
 
# Set the directory you want to start from
rootDir = './views/pug'

rootDir= sys.argv[1]

print ("Pug conversion path: %s" %s rootDir)

for dirName, subdirList, fileList in os.walk(rootDir):
    print('Found directory: %s' % dirName)	
    for fname in fileList:
    	if fname.endswith("html"):
    		print("%s" % fname)
    		fpath = os.path.join(dirName, fname)
    		os.system("html2pug < %s > %s" % (fpath, (fpath[:-5]+".pug")))
    		os.system("rm %s" % fpath)
