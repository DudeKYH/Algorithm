SELECT count(*) AS fish_count FROM fish_info fi
INNER JOIN fish_name_info fni ON fi.fish_type=fni.fish_type
WHERE fni.fish_name IN ("BASS", "SNAPPER");