import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from "@faker-js/faker";

const addUser = createAsyncThunk("users/add", async () => {
  const response = axios.post("http://localhost:3003/users", {
    name: faker.person.fullName(),
  });

  return response;
});

export { addUser };
