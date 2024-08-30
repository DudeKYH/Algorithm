SELECT b.title, b.board_id, r.reply_id, r.writer_id, r.contents, date_format(r.created_date, '%Y-%m-%d')
FROM used_goods_board b
INNER JOIN used_goods_reply r on r.board_id=b.board_id
WHERE b.created_date LIKE "2022-10%"
order by r.created_date, b.title