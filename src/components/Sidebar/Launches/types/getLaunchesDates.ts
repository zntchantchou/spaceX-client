/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getLaunchesDates
// ====================================================

export interface getLaunchesDates_launches {
  __typename: "Launch";
  launch_date_utc: any | null;
}

export interface getLaunchesDates {
  launches: (getLaunchesDates_launches | null)[] | null;
}
