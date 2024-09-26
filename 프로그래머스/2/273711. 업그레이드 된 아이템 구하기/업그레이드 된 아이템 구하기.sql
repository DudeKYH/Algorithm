SELECT it.item_id, ii.item_name, ii.rarity FROM item_tree it 
INNER JOIN item_info ii ON it.item_id=ii.item_id
WHERE parent_item_id IN (SELECT item_id FROM item_info WHERE rarity="RARE")
ORDER BY it.item_id DESC
