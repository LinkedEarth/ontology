for i in `ls *.ttl | cut -f 1 -d '.'`; do echo $i; java -jar ~/Downloads/widoco-1.4.16-jar-with-dependencies.jar -ontFile $i.ttl -outFolder ../release_2/$i/2.0.0 -rewriteAll -noPlaceHolderText; done
