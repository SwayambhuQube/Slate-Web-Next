import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CampaignState {
  value: [];
}

const initialState: CampaignState = {
  value: [],
};

export const campaignSlice = createSlice({
  name: "campaign",
  initialState,
  reducers: {
    assign: (state, action: PayloadAction) => action.payload,
  },
});

// Action creators are generated for each case reducer function
export const { assign } = campaignSlice.actions;

export default campaignSlice.reducer;
