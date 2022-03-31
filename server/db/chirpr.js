import { Query } from "./index";

const all = async () => Query("select * from Chirps");
const one = async (id) => Query("select * from Chirps WHERE id = ?", [id]);
const post = (userid, content, location) =>
  Query("insert into chirps(userid, content, location) values(?,?,?", [
    userid,
    content,
    location,
  ]);
const del = (id) => Query("delete from chirps where id = ?", [id]);
const update = (id, content) => Query("update chirps set content =  where chirps.id = ?", [content, id]);

export default {
  all,
  one,
  post,
  del,
  update,
};
