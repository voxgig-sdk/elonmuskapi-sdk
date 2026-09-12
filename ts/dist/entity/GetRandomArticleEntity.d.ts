import { ElonmuskapiEntityBase } from '../ElonmuskapiEntityBase';
import type { ElonmuskapiSDK } from '../ElonmuskapiSDK';
import type { Control } from '../types';
import type { GetRandomArticle, GetRandomArticleLoadMatch } from '../ElonmuskapiTypes';
declare class GetRandomArticleEntity extends ElonmuskapiEntityBase<GetRandomArticle> {
    constructor(client: ElonmuskapiSDK, entopts: any);
    make(this: GetRandomArticleEntity): GetRandomArticleEntity;
    load(this: any, reqmatch?: GetRandomArticleLoadMatch, ctrl?: Control): Promise<GetRandomArticleEntity>;
}
export { GetRandomArticleEntity };
