import * as express from 'express';

export default abstract class BaseController {
  protected abstract executeImpl(
    req: express.Request,
    res: express.Response,
  ): Promise<void | any>;

  public async execute(
    req: express.Request,
    res: express.Response,
  ): Promise<void> {
    try {
      this.executeImpl(req, res);
    } catch (err) {
      console.log(`[BaseController]: Uncaught controller error`);
      console.log(err);
    }
  }

  public static jsonResponse(
    res: express.Response,
    code: number,
    message: string,
  ): Promise<void> {
    return res.status(code).json({ message });
  }
}
