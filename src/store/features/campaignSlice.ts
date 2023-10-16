import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CampaignState {
  value: any[];
}

const initialState: CampaignState = {
  value: [],
};

export const campaignSlice = createSlice({
  name: "campaign",
  initialState,
  reducers: {
    assign: (state: CampaignState, action: PayloadAction<any>) => {
      return { ...state, value: action.payload };
    },
    assignMetaData: (state, action: PayloadAction<any>) => {
      const index = state.value.findIndex(
        (s: any) => s.orderId === action.payload.orderId
      );
      state.value[index] = {
        ...state.value[index],
        ...action.payload.metaData,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { assign, assignMetaData } = campaignSlice.actions;

export default campaignSlice.reducer;
