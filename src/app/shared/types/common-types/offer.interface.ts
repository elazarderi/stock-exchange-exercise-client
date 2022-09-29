import { TDealPreformerType, TOfferType, ITrader, IShare, IDeal } from "..";

export interface IOffer {
	id: number;
	type: TOfferType;
	offeredType: TDealPreformerType;
	offeredTraderId?: number;
	shareId: number;
	isPerformed: boolean;
	requestDate: Date;
	isDeleted: boolean;

	offeredTrader?: ITrader;
	share?: IShare;
	deal?: IDeal;
}