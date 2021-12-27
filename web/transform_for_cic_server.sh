#!/bin/bash

original_css_path="../_site/assets/css/"

if [[ "$1" == "" ]]
then
    wget --convert-links -r http://127.0.0.1:4000/segun/
    mv "127.0.0.1:4000/segun" web
    rmdir "127.0.0.1:4000"
    target_dir="web"
else
    target_dir="$1"
fi

cp -r "${original_css_path}" "${target_dir}/assets/"

for file in $(grep -r "http://localhost:4000/" "${target_dir}"|cut -f1 -d":"|uniq)
do
    sed -i "s/http:\/\/localhost:4000\//https:\/\/nlp.cic.ipn.mx\//g" ${file}
done

for file in $(grep -r "window.location.pathname" "${target_dir}"|cut -f1 -d":"|uniq)
do
    sed -i "s/window.location.pathname/\"index.html\"/g" ${file}
done

if [[ "${target_dir}" == "web" ]]
then
    cp -r web/* .
    rm -rf web
fi
