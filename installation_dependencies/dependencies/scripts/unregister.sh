index=$1

if [ -d node$index ] && [ -f node$index/data/node.json ];then
    bash node_manager.sh cancelNode `pwd`/node$index/data/node.json
else
    echo "node$index/node.json is node exist."
fi