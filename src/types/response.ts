// import { IOrder } from './campaigns/orders';
import { ISchedule } from './campaigns/schedule';
import { IScreen } from './campaigns/screen';
import { IShow } from './campaigns/shows';
import { IFailureSchedule } from './failures/failuresSchedule';
import { IFailureScreen } from './failures/failuresScreen';

export interface IOrder {
  length: number;
  id: number;
  orderId: string;
  noOfSchedules: number;
  noOfScreens: number;
  totalTaken: number;
  totalNotTaken: number;
  totalPlayed: number;
  totalNotPlayed: number;
  spotsMaximum: number;
  spotsScheduled: number;
  spotsPlayed: number;
  spotsPossible: number;
  takenPercent: number;
  playedPercent: number;
  spotsPlayedPercent: number;
  [key: string]: any; // Index signature
}

export interface IOrderSummaryStructure {
  className: string;
  response: string;
  label: string;
}

export interface IOrdersSummaryResponse {
  noOfActive: number;
  noOfCompleted: number;
  noOfLogsPending: number;
  noOfPlaned: number;
  noOfProblematic: number;
  noOfUnoptimized: number;
  problematicPercent: number;
}

export interface IFilterData {
  label: string;
  option: string;
  value: string;
  type: string;
}

export type ISchedulesResponse = ISchedule[];

export type IOrdersResponse = IOrder[];

export type IScreensResponse = IScreen[];

export type IShowsResponse = IShow[];

export type IFailureScreenResponse = IFailureScreen[];

export type IFailureScheduleResponse = IFailureSchedule[];
