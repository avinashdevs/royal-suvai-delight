import handler from '../dist/server/index.js';

export default async function (req: any, res: any) {
  return handler(req, res);
}
