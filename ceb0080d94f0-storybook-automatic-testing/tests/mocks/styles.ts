const object = {};
const handler = {
  get(target: Record<string, string>, key: string) {
    return key;
  },
};

export default new Proxy(object, handler);
