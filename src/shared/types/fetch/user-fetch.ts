export interface UserResultsIF {
  name: string;
  uid: string;
}

export interface UserResponseIF {
  data: {
    results: UserResultsIF[];
  };
}
