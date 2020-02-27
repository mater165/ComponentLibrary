import isEmpty from "lodash/isEmpty";
import uniq from "lodash/uniq";

export function joinClass(...args: any[]) {
  return isEmpty(args) ? "" : uniq(args.filter(Boolean)).join(" ");
}
