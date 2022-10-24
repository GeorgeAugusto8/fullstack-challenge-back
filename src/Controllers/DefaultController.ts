import { Request, Response } from "express";
import { pages, posts } from '../Constants';

class DefaultController {
    public returnPosts = (req: Request, res: Response) => {
        try {
            res.status(200).json(posts);
        } catch (e) {
            res.status(500).json({ message: 'erro no processamento da requisição', erro: e });
        }
    }

    public returnPages = (req: Request, res: Response) => {
        try {
            res.status(200).json(pages);
        } catch (e) {
            res.status(500).json({ message: 'erro no processamento da requisição', erro: e });
        }
    }
}

export const defaultController = new DefaultController();
