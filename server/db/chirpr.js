import { Query } from "./index";

const all = async () => Query("select * from Chirps");
const one = async (id) => Query("select * from Chirps WHERE id = ?", [id]);
const insert = (userid, content, location) =>
  Query("insert into Chirps(userid, content, location) values(?,?,?)", [
    userid,
    content,
    location,
  ]);
const destroy = (id) => Query("delete from Chirps where id = ?", [id]);
const update = (id, content) =>
  Query("update Chirps set content = ? where chirps.id = ?", [content, id]);

export default {
  all,
  one,
  insert,
  destroy,
  update,
};
