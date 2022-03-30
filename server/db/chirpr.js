import { Query } from "./index";

const all = async () => Query("select * from Chirps");
const one = async (id) => Query("select * from Chirps WHERE id = ?", [id]);

export default {
  all,
  one,
};
