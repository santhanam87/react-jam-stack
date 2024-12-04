import { Bootstrap } from "./bootstrap";

(async () => {
  try {
    const url = await Bootstrap();
    console.info(`server running @ ${url}`);
  } catch (e) {
    console.info(e);
  }
})();
